import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function StripePaymentForm() {
	const [paymentAmount, setPaymentAmount] = useState(1000); // Amount in cents
	const [paymentError, setPaymentError] = useState(null);
	const [paymentSuccess, setPaymentSuccess] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const stripe = await stripePromise;

		const response = await fetch("/api/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: paymentAmount }),
		});

		const data = await response.json();

		const result = await stripe.confirmCardPayment(data.clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: "John Doe",
				},
			},
		});

		if (result.error) {
			setPaymentError(`Payment failed: ${result.error.message}`);
		} else {
			setPaymentSuccess("Payment successful!");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Payment Amount: $
					<input
						type="number"
						value={paymentAmount / 100} // Convert cents to dollars
						onChange={(e) => setPaymentAmount(e.target.value * 100)} // Convert dollars to cents
					/>
				</label>
				<div id="card-element">{/* Stripe CardElement goes here */}</div>
				<button type="submit">Pay</button>
			</form>
			{paymentError && <div>{paymentError}</div>}
			{paymentSuccess && <div>{paymentSuccess}</div>}
		</div>
	);
}

export default StripePaymentForm;

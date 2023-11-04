import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

function PaymentForm({ stripe }) {
	const [paymentAmount, setPaymentAmount] = useState(0);
	const [paymentReference, setPaymentReference] = useState("");

	const handlePayment = async () => {
		try {
			const { token } = await stripe.createToken();
			const response = await fetch("/api/payment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user_id: 1, // Replace with user ID
					payment_reference: paymentReference,
					payment_amount: paymentAmount,
					token: token.id,
				}),
			});

			if (response.ok) {
				console.log("Payment successful");
			} else {
				console.error("Payment failed");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Payment Reference"
					value={paymentReference}
					onChange={(e) => setPaymentReference(e.target.value)}
				/>
			</div>
			<div>
				<input
					type="number"
					placeholder="Payment Amount"
					value={paymentAmount}
					onChange={(e) => setPaymentAmount(e.target.value)}
				/>
			</div>
			<div>
				<CardElement />
			</div>
			<button onClick={handlePayment}>Submit Payment</button>
		</div>
	);
}

export default PaymentForm;

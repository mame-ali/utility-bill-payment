import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY"); // Replace with your Stripe publishable key

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		const { token, error } = await stripe.createToken(
			elements.getElement(CardElement)
		);

		if (error) {
			console.error(error);
		} else {
			const response = await axios.post("/api/payment", { token: token });
			console.log(response.data);
		}

		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button type="submit" disabled={!stripe || loading}>
				Pay
			</button>
		</form>
	);
};

const App = () => {
	return (
		<div>
			<h1>Payment</h1>
			<Elements stripe={stripePromise}>
				<PaymentForm />
			</Elements>
		</div>
	);
};

export default App;

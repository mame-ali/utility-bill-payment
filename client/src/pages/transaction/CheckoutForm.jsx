import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Transaction.css"; // Import the CSS file
import axios from "../../utils/axios"; // Import Axios

function PaymentForm() {
	const [user_id, setUserId] = useState("");
	const [amount, setAmount] = useState("");
	const [payment_status, setPaymentStatus] = useState("completed");

	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);

		const result = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (result.error) {
			console.log(result.error.message);
		} else {
			const token = result.paymentMethod.id;

			const paymentData = { user_id, amount, payment_status, token };

			// Use Axios to send a POST request to your backend API
			axios
				.post("users/insertTransaction", paymentData)
				.then((response) => {
					console.log(response.data);
					alert("transaction succesfull completed");
					// Handle the response from your backend, e.g., show a success message to the user
				})
				.catch((error) => {
					console.error("Error:", error);
				});

			setUserId("");
			setAmount("");
			setPaymentStatus("completed");
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					className="input-field"
					placeholder="User ID"
					value={user_id}
					onChange={(e) => setUserId(e.target.value)}
					required
				/>
				<input
					type="number"
					className="input-field"
					placeholder="Amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					required
				/>
				<select
					className="select-field"
					value={payment_status}
					onChange={(e) => setPaymentStatus(e.target.value)}
				>
					<option value="completed">Completed</option>
					<option value="pending">Pending</option>
				</select>
				<CardElement className="card-element" />
				<button type="submit" className="pay-button">
					Pay
				</button>
			</form>
		</div>
	);
}

export default PaymentForm;

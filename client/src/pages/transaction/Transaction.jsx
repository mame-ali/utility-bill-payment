import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51Nn1nKBEazAh7lNxNO5ifnuZ3iNqCuLVAgYS7bgek8sGzcHVBdGT8LePBO8sPn6WsxAnXMhI5kKD5M3fHRekwwSt00cFzdJxrc"
);

function Transaction() {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
}

export default Transaction;

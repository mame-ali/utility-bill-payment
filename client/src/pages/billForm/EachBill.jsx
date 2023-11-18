import React, { useState } from "react";
// import axios from "axios";
import BillForm from "./BillForm";
import BillDisplay from "./BillDisplay";
import axios from "../../utils/axios";

const EachBill = () => {
	const [bill, setBill] = useState(null);
	const [error, setError] = useState(null);

	const fetchBill = (accountNumber) => {
		// Make a GET request to retrieve bill information
		axios
			.get(`/bills/getbills/${accountNumber}`)
			.then((response) => {
				setBill(response.data);
			})
			.catch((error) => {
				console.error("Error fetching bill:", error);
				setBill(null); // Reset bill to null on error
				setError("Error fetching bill. Please try again.");
			});
	};

	return (
		<div>
			<h1>Retrieve Your Bill</h1>
			<BillForm fetchBill={fetchBill} />
			<BillDisplay bill={bill} />
		</div>
	);
};

export default EachBill;

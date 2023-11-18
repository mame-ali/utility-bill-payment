import React, { useState } from "react";

const BillForm = ({ fetchBill }) => {
	const [accountNumber, setAccountNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchBill(accountNumber);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={accountNumber}
				onChange={(e) => setAccountNumber(e.target.value)}
				placeholder="Enter Account Number"
			/>
			<button type="submit">Fetch Bill</button>
		</form>
	);
};

export default BillForm;

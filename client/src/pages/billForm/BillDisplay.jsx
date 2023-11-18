import React from "react";

const BillDisplay = ({ bill }) => {
	return (
		<div>
			<h2>Bill Details</h2>
			{bill ? (
				<div>
					<p>Bill First Name: {bill.f_name}</p>
					<p>Bill last Name: {bill.l_name}</p>
					<p>Bill Month: {bill.bill_month}</p>
					<p>Bill Status: {bill.bill_status}</p>
					<p>Bill Range: {bill.ec_range}</p>
					<p>Bill Amount: {bill.bill_amount}</p>
					{/* Display other bill details here */}
				</div>
			) : (
				<p>No bill information available</p>
			)}
		</div>
	);
};

export default BillDisplay;

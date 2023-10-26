import React from "react";
import "./Bill-information.css"; // CSS file for styling

const BillInformation = ({ billAmount, dueDate }) => {
	return (
		<div className="bill-info-container">
			<h2 className="bill-info-header">Electricity Bill Information</h2>
			<div className="bill-info-content">
				<div className="bill-info-item">
					<span className="bill-info-label">Bill Amount:</span>
					{/* <span className="bill-info-value">{billAmount} Birr</span> */}
				</div>
				<div className="bill-info-item">
					<span className="bill-info-label">Due Date:</span>
					{/* <span className="bill-info-value">{dueDate}</span> */}
				</div>
			</div>
			<p className="bill-info-note">
				Please make the payment before the due date to avoid any late payment
				charges.
			</p>
		</div>
	);
};

export default BillInformation;

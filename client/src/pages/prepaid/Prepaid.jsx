import React from "react";
import "./Prepaid.css"; // CSS file for styling

const Prepaid = () => {
	return (
		<div className="prepaid-container">
			<h2 className="prepaid-header">
				Welcome to the Electricity Bill Payment System
			</h2>
			<p className="prepaid-paragraph">
				With our prepaid electricity billing system, you have full control over
				your energy usage and expenses. Simply follow the steps below to
				recharge your account and enjoy uninterrupted power supply.
			</p>
			<div className="prepaid-steps">
				<div className="prepaid-step">
					<div className="prepaid-step-number">1</div>
					<div className="prepaid-step-description">
						<h3>Register</h3>
						<p>
							Create an account by providing your personal details and contact
							information. This will allow you to track your usage and payment
							history.
						</p>
					</div>
				</div>
				<div className="prepaid-step">
					<div className="prepaid-step-number">2</div>
					<div className="prepaid-step-description">
						<h3>Recharge</h3>
						<p>
							Choose a convenient payment method and recharge your account with
							the desired amount. You can use various payment options such as
							credit/debit cards, mobile wallets, or bank transfers.
						</p>
					</div>
				</div>
				<div className="prepaid-step">
					<div className="prepaid-step-number">3</div>
					<div className="prepaid-step-description">
						<h3>Monitor</h3>
						<p>
							Keep track of your energy consumption and balance. Our
							user-friendly dashboard provides real-time information about your
							usage, remaining balance, and payment history.
						</p>
					</div>
				</div>
				<div className="prepaid-step">
					<div className="prepaid-step-number">4</div>
					<div className="prepaid-step-description">
						<h3>Enjoy</h3>
						<p>
							Sit back and enjoy uninterrupted power supply. Our prepaid system
							ensures that you have control over your usage and eliminates
							unexpected bills.
						</p>
					</div>
				</div>
			</div>
			<p className="prepaid-paragraph">
				Experience the convenience and flexibility of our prepaid electricity
				billing system. Sign up today and take charge of your energy
				consumption.
			</p>
		</div>
	);
};

export default Prepaid;

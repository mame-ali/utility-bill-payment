import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
	faCreditCard,
	faWallet,
	faReceipt,
	faCoins,
	faPlug,
	faBuilding,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard22() {
	const [userData, setUserData] = useContext(UserContext);

	// Example functions to fetch data
	const getAllUsers = () => {
		// Implement logic to fetch all users
		console.log("Fetching all users");
	};

	const getAllAdmins = () => {
		// Implement logic to fetch all admins
		console.log("Fetching all admins");
	};

	const getPaidBills = () => {
		// Implement logic to fetch paid bills
		console.log("Fetching paid bills");
	};

	const getUnpaidBills = () => {
		// Implement logic to fetch unpaid bills
		console.log("Fetching unpaid bills");
	};

	useEffect(() => {
		// Fetch data when the component mounts
		getAllUsers();
		getAllAdmins();
		getPaidBills();
		getUnpaidBills();
	}, []);

	const serviceBlocks = [
		{
			title: "All Users",
			link: "/prepaid",
			icon: faCreditCard,
		},
		{
			title: "All Electricities",
			link: "/postpaid",
			icon: faWallet,
		},
		{
			title: "Paid Bills",
			link: "/userbill",
			icon: faReceipt,
		},
		{
			title: "Unpaid Bills",
			link: "/payment-option",
			icon: faCoins,
		},
		{
			title: "Admins",
			link: "/get-electricity",
			icon: faPlug,
		},
		{
			title: "Feedbacks",
			link: "/customer-service",
			icon: faBuilding,
		},
	];

	return (
		<section className="services-section mt-3 pt-1">
			<div className="auto-container mt-0 pt-0">
				<div className="row">
					{serviceBlocks.map((block, index) => (
						<div className="col-lg-4 service-block-one" key={index}>
							<div className="inner-box hvr-float-shadow">
								<h5>Electricity Bill Payment</h5>
								<h2>{block.title}</h2>
								<Link to={block.link} className="read-more">
									read more +
								</Link>
								<div className="icon">
									<FontAwesomeIcon icon={block.icon} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Dashboard22;

import React, { useContext, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Dashboard() {
	const [userData, setUserData] = useContext(UserContext);

	return (
		<section className="services-section mt-3 pt-1">
			<div className="auto-container mt-0 pt-0">
				<div className="row">
					<div className="col-lg-4 service-block-one">
						<div className="inner-box hvr-float-shadow">
							<h5>Electricity Bill Payment</h5>
							<h2>Prepaid</h2>
							<Link to="/prepaid" className="read-more">
								read more +
							</Link>
							<div className="icon">
								<FontAwesomeIcon icon={faCreditCard} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 service-block-one">
						<div className="inner-box hvr-float-shadow">
							<h5>Electricity Bill Payment</h5>
							<h2>Postpaid</h2>
							<Link to="/postpaid" className="read-more">
								read more +
							</Link>
							<div className="icon">
								<FontAwesomeIcon icon={faWallet} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 service-block-one">
						<div className="inner-box hvr-float-shadow">
							<h5>Electricity Bill Payment</h5>
							<h2>Your Bill Info</h2>
							<Link to="/userbill" className="read-more">
								read more +
							</Link>
							<div className="icon">
								<FontAwesomeIcon icon={faReceipt} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 service-block-one">
						<div className="inner-box hvr-float-shadow">
							<h5>Electricity Bill Payment</h5>
							<h2>Payment Options</h2>
							<Link to="/payment-option" className="read-more">
								read more +
							</Link>
							<div className="icon">
								<FontAwesomeIcon icon={faCoins} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 service-block-one">
						<div className="inner-box hvr-float-shadow">
							<h5>Electricity Bill Payment</h5>
							<h2>Getting Electricity</h2>
							<Link to="/get-electricity" className="read-more">
								read more +
							</Link>
							<div className="icon">
								<FontAwesomeIcon icon={faPlug} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 service-block-one">
						<div className="inner-box hvr-float-shadow">
							<h5>Electricity Bill Payment</h5>
							<h2>Customer Service</h2>
							<Link to="/customer-service" className="read-more">
								read more +
							</Link>
							<div className="icon">
								<FontAwesomeIcon icon={faBuilding} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Dashboard;

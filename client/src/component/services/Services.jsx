import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ServicesSection() {
	return (
		<section className="services-section">
			<div className="auto-container">
				<div className="sec-title style-two">
					<h2>Our Featured Services</h2>
					<div className="text">
						Bring to the table win-win survival strategies to ensure proactive
						domination. At the end of the day, going forward, a new normal that
						has evolved from generation X is on the runway heading towards a
						streamlined cloud solution.
					</div>
				</div>
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
							<h2>Bill Information</h2>
							<Link to="/bill-info" className="read-more">
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
							<h2>Customer Service Center</h2>
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

export default ServicesSection;

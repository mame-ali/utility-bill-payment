import React from "react";
import image1 from "../../assets/images/banner/banner.jpg";
import { Link } from "react-router-dom";

function ElectricityBillAbout() {
	return (
		<div>
			<div className="auto-container">
				<h2>About our Electricity Bill Service</h2>
				<ul className="page-breadcrumb">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>About our Electricity Bill Service</li>
				</ul>
			</div>
			{/* <section className="page-title">
				<div className="auto-container">
					<h2>About our Electricity Bill Service</h2>
					<ul className="page-breadcrumb">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>About our Electricity Bill Service</li>
					</ul>
				</div>
			</section> */}
			<section className="about-section-three">
				<div className="auto-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="content">
								<h2>
									We are dedicated to simplifying your electricity bill payment
								</h2>
								<div className="text">
									<p>
										Our mission is to provide you with a seamless experience for
										paying your electricity bills. Say goodbye to long queues
										and late payments.
									</p>
									<p>
										We ensure the privacy and security of your payment
										information. With our user-friendly platform, you can easily
										view your bill details, check your usage history, and make
										payments from the comfort of your own home.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="image">
								<img src={image1} alt="Electricity Bill Image" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="video-section">
				<div className="sec-bg"></div>
				<div className="auto-container">
					<h5>Working since 1992</h5>
					<h2>We are leaders in Electricity Bill Payment</h2>
					<div className="video-box">
						<div className="video-btn">
							<a
								href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
								className="overlay-link lightbox-image video-fancybox ripple"
							>
								<i className="flaticon-play"></i>
							</a>
						</div>
						<div className="text">
							Watch intro video <br /> about us
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ElectricityBillAbout;

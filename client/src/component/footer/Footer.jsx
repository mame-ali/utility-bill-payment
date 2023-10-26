import React from "react";

function Footer() {
	return (
		<footer className="main-footer">
			<div className="upper-box">
				<div className="auto-container">
					<div className="row no-gutters">
						{/* Footer Info Box */}
						<div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
							<div className="info-inner">
								<div className="content">
									<div className="icon">
										<span className="flaticon-pin"></span>
									</div>
									<div className="text">
										4kilo, Arada Subcity, <br /> Addis Ababa, Ethiopia
									</div>
								</div>
							</div>
						</div>

						{/* Footer Info Box */}
						<div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
							<div className="info-inner">
								<div className="content">
									<div className="icon">
										<span className="flaticon-email"></span>
									</div>
									<div className="text">
										Email us : <br />{" "}
										<a href="mailto:contact.contact@autorex.com">
											aaucncs2022@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Footer Info Box */}
						<div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
							<div className="info-inner">
								<div className="content">
									<div className="icon">
										<span className="flaticon-phone"></span>
									</div>
									<div className="text">
										Call us on : <br />
										<strong>+251918922553</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="widgets-section">
				<div className="auto-container">
					<div className="widgets-inner-container">
						<div className="row clearfix">
							{/* Footer Column */}
							<div className="footer-column col-lg-4">
								<div className="widget widget_about">
									<div className="logo">
										<a href="index.html">
											<img src="assets/images/logo-two.png" alt="" />
										</a>
									</div>
									<div className="text">
										Capitalize on low hanging fruit to identify a ballpark value
										added activity to beta test. Override the digital divide
										additional clickthroughs.
									</div>
								</div>
							</div>

							{/* Footer Column */}
							<div className="footer-column col-lg-4">
								<div className="row">
									<div className="col-md-6">
										<div className="widget widget_links">
											<h4 className="widget_title">Useful Links</h4>
											<div className="widget-content">
												<ul className="list">
													<li>
														<a href="index.html">Home</a>
													</li>
													<li>
														<a href="about.html">About Us</a>
													</li>

													<li>
														<a href="testimonial.html">Testimonials</a>
													</li>
													<li>
														<a href="contact.html">Contact Us</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="widget widget_links">
											<h4 className="widget_title">Our Services</h4>
											<div className="widget-content">
												<ul className="list">
													<li>
														<a href="#">prepaid Service</a>
													</li>
													<li>
														<a href="#">Postpaid Service</a>
													</li>
													<li>
														<a href="#">Getting Electricity &amp; Service</a>
													</li>
													<li>
														<a href="#">Bill info</a>
													</li>
													<li>
														<a href="#">Payment Options</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Footer Column */}
							<div className="footer-column col-lg-4">
								<div className="widget widget_newsletter">
									<h4 className="widget_title">Newsletter</h4>
									<div className="text">Get latest updates and offers.</div>
									<div className="newsletter-form">
										<form className="ajax-sub-form" method="post">
											<div className="form-group">
												<input
													type="email"
													placeholder="Enter your email"
													id="subscription-email"
												/>
												<button className="theme-btn" type="submit">
													<span className="fas fa-paper-plane"></span>
												</button>
												<label
													className="subscription-label"
													htmlFor="subscription-email"
												></label>
											</div>
										</form>
									</div>
									<ul className="social-links">
										<li>
											<a href="#">
												<span className="fab fa-facebook-f"></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span className="fab fa-linkedin-in"></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span className="fab fa-twitter"></span>
											</a>
										</li>
										<li>
											<a href="#">
												<span className="fab fa-google-plus-g"></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="auto-container">
				<div className="footer-bottom">
					<div className="copyright-text">
						© {new Date().getFullYear()} OictSolutions. All rights reserved.
					</div>
					<div className="text">
						Created by <a href="#">Mame</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

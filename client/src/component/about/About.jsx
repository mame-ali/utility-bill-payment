import React from "react";
import image1 from "../../assets/images/for-about/light-bulb.jpg";
import image2 from "../../assets/images/for-about/closeup-contact.jpg";
function About() {
	return (
		<section className="about-section">
			<div className="auto-container">
				<div className="row">
					<div className="col-lg-5">
						<div className="image-box">
							<img src={image1} alt="" />
							<img src={image2} alt="" />
							<div className="year-experience" data-parallax='{"y": 30}'>
								<strong>24</strong> years <br /> Experience
							</div>
						</div>
					</div>
					<div className="col-lg-7 pl-lg-5">
						<div className="sec-title">
							<h5>Welcome to Our Electricity Bill Payment Service</h5>
							<h2>Convenient and Secure Online Bill Payment</h2>
							<div className="text">
								<p>
									Simplify your life with our hassle-free online bill payment
									service. We bring you a seamless experience to pay your
									electricity bills with just a few clicks. Say goodbye to long
									queues and late payments.
								</p>
								<p>
									Our secure platform ensures the privacy and safety of your
									payment information. With our user-friendly interface, you can
									easily view your bill details, check your usage history, and
									make payments from the comfort of your own home.
								</p>
							</div>
							<div className="link-btn mt-40">
								<a
									href="about.html"
									className="theme-btn btn-style-one style-two"
								>
									<span>
										About Us <i className="flaticon-right"></i>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

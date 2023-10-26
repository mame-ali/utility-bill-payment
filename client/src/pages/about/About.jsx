import React from "react";
import imag1 from "../../assets/images/banner/banner.jpg";
import { Link } from "react-router-dom";
function About() {
	return (
		<div>
			<section
				className="page-title"
				// style={{background-image:"url(assets/images/background/bg-3.jpg)"}}
			>
				<div className="auto-container">
					<h2>About us</h2>
					<ul className="page-breadcrumb">
						<li>
							<Link to="/">home</Link>
						</li>
						<li>About us</li>
					</ul>
				</div>
				{/* <h1 data-parallax='{"x": 200}'>Car Repairing</h1> */}
			</section>
			<section className="about-section-three">
				<div className="auto-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="content">
								<h2>
									We are highly skilled mechanics <br /> for your car repair
								</h2>
								<div className="text">
									<p>
										Bring to the table win-win survival strategies to ensure
										proactive domination. At the end of the day, going forward,
										a new normal that has evolved from generation X is on the
										runway heading towards a streamlined cloud solution. User
										generated content in real-time will have multiple
										touchpoints for offshoring.
									</p>
									<p>
										Capitalize on low hanging fruit to identify a ballpark value
										added activity to beta test. Override the digital divide
										with additional clickthroughs from DevOps. Nanotechnology
										immersion along the information heading towards a
										streamlined cloud solution. User generated content in
										real-time will have multiple.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="image">
								<img src={imag1} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="video-section">
				<div
					// data-parallax='{"y": 50}'
					className="sec-bg"
					// style="background-image: url(assets/images/background/bg-1.jpg);"
				></div>
				<div className="auto-container">
					<h5>Working since 1992</h5>
					<h2>
						We are leader <br /> in Car Mechanical Work
					</h2>
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

export default About;

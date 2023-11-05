import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Home.css";
import About from "../../component/about/About";
import ServicesSection from "../../component/services/Services";
import BlogSection from "../../component/blog/Blog";
function Home() {
	return (
		<>
			<section className="video-section">
				<div
					data-parallax='{"y": 50}'
					className="sec-bg"
					style={{
						backgroundImage: "url(../../../../assets/images/banner/banner.jpg)",
					}}
				></div>
				<div className="auto-container">
					<h5>Working since 2000</h5>
					<h2>
						Welcome To <br /> Utility Bill Payment System
					</h2>
					<div className="video-box">
						<div className="video-btn">
							<a
								href="https://youtu.be/ygfaE_3ICBo?si=Pengl7ZgWyN-mx8l"
								target="blank"
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
			<ServicesSection />
			<About />

			<BlogSection />
		</>
	);
}

export default Home;

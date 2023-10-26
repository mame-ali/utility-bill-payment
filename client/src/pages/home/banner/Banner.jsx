import React from "react";
import Swiper from "swiper";
// import "swiper/css/swiper.css";
export default function BannerSection() {
	React.useEffect(() => {
		new Swiper(".banner-slider", {
			loop: true,
			navigation: {
				prevEl: ".banner-slider-button-prev",
				nextEl: ".banner-slider-button-next",
			},
		});
	}, []);

	return (
		<section className="banner-section">
			<div className="swiper-container banner-slider">
				<div className="swiper-wrapper">
					{/* Slide Item 1 */}
					<div
						className="swiper-slide"
						style={{
							backgroundImage:
								"url(../../../../assets/images/banner/banner.jpg)",
						}}
					>
						<div className="content-outer">
							<div className="content-box">
								<div className="inner">
									<h1>
										Tuneup Your Car <br /> to Next Level
									</h1>
									<div className="text">
										We believe in providing top quality workmanship and are{" "}
										<br />
										so confident in our level of service that we back it up{" "}
										<br /> with a good quality.
									</div>
									<div className="link-box">
										<a
											href="service-1.html"
											className="theme-btn btn-style-one"
										>
											<span>
												view all services <i className="flaticon-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Slide Item 2 */}
					<div
						className="swiper-slide"
						style={{
							backgroundImage:
								"url(../../../../../assets/images/banner/banner.jpg)",
						}}
					>
						<div className="content-outer">
							<div className="content-box">
								<div className="inner">
									<h1>
										Highly Skilled <br /> Certified Engineers
									</h1>
									<div className="text">
										We believe in providing top quality workmanship and are{" "}
										<br />
										so confident in our level of service that we back it up{" "}
										<br /> with a good quality.
									</div>
									<div className="link-box">
										<a
											href="service-1.html"
											className="theme-btn btn-style-one"
										>
											<span>
												view all services <i className="flaticon-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Slide Item 3 */}
					<div
						className="swiper-slide"
						style={{
							backgroundImage:
								"url(../../../../../assets/images/banner/banner.jpg)",
						}}
					>
						<div className="content-outer">
							<div className="content-box">
								<div className="inner">
									<h1>
										Modern Workshop <br /> For Car Repair
									</h1>
									<div className="text">
										We believe in providing top quality workmanship and are{" "}
										<br />
										so confident in our level of service that we back it up{" "}
										<br /> with a good quality.
									</div>
									<div className="link-box">
										<a
											href="service-1.html"
											className="theme-btn btn-style-one"
										>
											<span>
												view all services <i className="flaticon-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="banner-slider-nav">
				<div className="banner-slider-control banner-slider-button-prev">
					<span>
						<i className="far fa-angle-left"></i>
					</span>
				</div>
				<div className="banner-slider-control banner-slider-button-next">
					<span>
						<i className="far fa-angle-right"></i>
					</span>{" "}
				</div>
			</div>
		</section>
	);
}

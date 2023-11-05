import React from "react";
// import image1 from "../../assets/template_assets/images/resource/news-1.jpg";
// import image2 from "../../assets/template_assets/images/resource/news-2.jpg";
// import image3 from "../../assets/template_assets/images/resource/news-3.jpg";
export default function BlogSection() {
	return (
		<section className="blog-section">
			<div className="auto-container">
				<div className="top-content">
					<div className="m-0 row justify-content-between align-items-center">
						<div className="sec-title style-two">
							<h2>Latest Blog & Articles</h2>
						</div>
						<div className="link-btn">
							<a href="#" className="theme-btn">
								View All Blogs
							</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 news-block-one">
						<div className="inner-box">
							<div className="image">
								<a href="blog-details.html">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SvWeapFtyKWCxm7UFfRhMdBU5mv2k3Ixln1QCBwcCuPFoVTq5TV62m2u_H179dKtiSA&usqp=CAU"
										alt=""
									/>
								</a>
							</div>
							<div className="lower-content">
								<div className="meta-info">
									<a href="#">April 18, 2023</a>
									<a href="#">Electric Bill Payments</a>
								</div>
								<h3>
									<a href="blog-details.html">
										5 Tips for Easy <br /> Electricity Bill Payments
									</a>
								</h3>
								<div className="link-btn">
									<a href="blog-details.html" className="theme-btn">
										<i className="flaticon-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 news-block-one">
						<div className="inner-box">
							<div className="image">
								<a href="blog-details.html">
									<img
										src="data:image/jpeg;base64,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"
										alt=""
									/>
								</a>
							</div>
							<div className="lower-content">
								<div className="meta-info">
									<a href="#">July 18, 2022</a>
									<a href="#">Payment Methods</a>
								</div>
								<h3>
									<a href="blog-details.html">
										Streamlining Your Online <br /> Bill Payment Process
									</a>
								</h3>
								<div className="link-btn">
									<a href="blog-details.html" className="theme-btn">
										<i className="flaticon-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 news-block-one">
						<div className="inner-box">
							<div className="image">
								<a href="blog-details.html">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIvq8qwUJW2e_2EoqslXrCp7Zg71t4FFoEw&usqp=CAU"
										alt=""
									/>
								</a>
							</div>
							<div className="lower-content">
								<div className="meta-info">
									<a href="#">April 18, 2022</a>
									<a href="#">Other utilities</a>
								</div>
								<h3>
									<a href="blog-details.html">
										Tips To Save <br />
										Energy
									</a>
								</h3>
								<div className="link-btn">
									<a href="blog-details.html" className="theme-btn">
										<i className="flaticon-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

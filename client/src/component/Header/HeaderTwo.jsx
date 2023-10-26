import React from "react";

export default function HeaderTwo() {
	return (
		<div>
			<div className="header-top">
				<div className="auto-container">
					<div className="inner-container">
						<div className="left-column">
							<div className="text">
								# 1 Multibrand Car Workshop of Losangle City
							</div>
							<div className="office-hour">
								Monday - Saturday 7:00AM - 6:00PM
							</div>
						</div>
						<div className="right-column">
							<div className="phone-number">
								Schedule Your Appointment Today: <strong>1800 456 7890</strong>
							</div>
							<div className="language-switcher">
								<div id="polyglotLanguageSwitcher" className="">
									<form action="#">
										<select id="polyglot-language-options">
											<option id="en" value="en" selected>
												English
											</option>
											<option id="fr" value="fr">
												French
											</option>
											<option id="de" value="de">
												German
											</option>
											<option id="it" value="it">
												Italian
											</option>
											<option id="es" value="es">
												Spanish
											</option>
										</select>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="header-upper">
				<div className="auto-container">
					<div className="inner-container">
						<div className="logo-box">
							<div className="logo">
								<a href="index.html">
									<img src="assets/images/logo.png" alt="" />
								</a>
							</div>
						</div>
						<div className="right-column">
							<div className="nav-outer">
								<div className="mobile-nav-toggler">
									<img src="assets/images/icons/icon-bar.png" alt="" />
								</div>
								<nav className="main-menu navbar-expand-md navbar-light">
									<div
										className="collapse navbar-collapse show clearfix"
										id="navbarSupportedContent"
									>
										<ul className="navigation">
											<li className="dropdown">
												<a href="index.html">Home</a>
												<ul>
													<li>
														<a href="index.html">Home Page 1</a>
													</li>
													<li>
														<a href="index-2.html">Home Page 2</a>
													</li>
													<li>
														<a href="index-3.html">Home Page 3</a>
													</li>
												</ul>
											</li>
											<li className="dropdown">
												<a href="about.html">About Us</a>
												<ul>
													<li>
														<a href="about.html">About Us</a>
													</li>
													<li>
														<a href="history.html">Company History</a>
													</li>
													<li>
														<a href="team.html">Our Team</a>
													</li>
												</ul>
											</li>
											<li className="dropdown">
												<a href="service-1.html">Services</a>
												<ul>
													<li>
														<a href="service-1.html">Services 1</a>
													</li>
													<li>
														<a href="service-2.html">Services 2</a>
													</li>
													<li>
														<a href="service-details.html">Single Service</a>
													</li>
												</ul>
											</li>
											<li className="dropdown">
												<a href="gallery-1.html">Gallery</a>
												<ul>
													<li>
														<a href="gallery-1.html">Gallery 1</a>
													</li>
													<li>
														<a href="gallery-2.html">Gallery 2</a>
													</li>
												</ul>
											</li>
											<li className="dropdown">
												<a href="blog.html">Pages</a>
												<ul>
													<li>
														<a href="projects.html">Projects</a>
													</li>
													<li>
														<a href="project-details.html">Project Details</a>
													</li>
													<li>
														<a href="testimonials.html">Testimonials</a>
													</li>
													<li>
														<a href="faq.html">Faq</a>
													</li>
													<li>
														<a href="error.html">404 Error Page</a>
													</li>
													<li>
														<a href="comming-soon.html">Coming Soon Page</a>
													</li>
												</ul>
											</li>
											<li className="dropdown">
												<a href="#">News</a>
												<ul>
													<li>
														<a href="blog.html">Blog With Side bar</a>
													</li>
													<li>
														<a href="blog-2.html">Blog 2 Column</a>
													</li>
													<li>
														<a href="blog-details.html">Blog Details</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="contact.html">Contact Us</a>
											</li>
										</ul>
									</div>
								</nav>
							</div>
							<div className="search-btn">
								<button type="button" className="theme-btn search-toggler">
									<span className="stroke-gap-icon icon-Search"></span>
								</button>
							</div>
							<div className="link-btn">
								<a href="#" className="theme-btn btn-style-one">
									Book a Schedule
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sticky-header">
				<div className="header-upper">
					<div className="auto-container">
						<div className="inner-container">
							<div className="logo-box">
								<div className="logo">
									<a href="index.html">
										<img src="assets/images/logo.png" alt="" />
									</a>
								</div>
							</div>
							<div className="right-column">
								<div className="nav-outer">
									<div className="mobile-nav-toggler">
										<img src="assets/images/icons/icon-bar.png" alt="" />
									</div>
									<nav className="main-menu navbar-expand-md navbar-light"></nav>
								</div>
								<div className="search-btn">
									<button type="button" className="theme-btn search-toggler">
										<span className="stroke-gap-icon icon-Search"></span>
									</button>
								</div>
								<div className="link-btn">
									<a href="#" className="theme-btn btn-style-one">
										Book a Schedule
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

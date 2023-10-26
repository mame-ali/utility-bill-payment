import React, { useContext } from "react";
// import logo from "../../assets/images/logo.png";
import "./Header.css";
import iconbar from "../../assets/template_assets/images/icons/icon-bar.png";
import logo1 from "../../assets/icons//new.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import PersonIcon from "@mui/icons-material/Person";
function Header(props) {
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate();

	const handlelogout = () => {
		setUserData((userData.token = null));
		navigate("/login");
		console.log(userData.token);
	};
	return (
		<div>
			<header className="main-header header-style-one">
				<HeaderTop />
				<div className="header-upper">
					<div className="auto-container">
						<div className="inner-container">
							<div className="logo-box">
								<div className="logo">
									<Link to="/">
										<img src={logo1} alt="" />
									</Link>
								</div>
							</div>
							<div className="right-column">
								<div className="nav-outer">
									<div className="mobile-nav-toggler">
										<img src={iconbar} alt="icon-bar" />
									</div>
									<nav className="main-menu navbar-expand-md navbar-light">
										<div
											className="collapse navbar-collapse show clearfix"
											id="navbarSupportedContent"
										>
											<ul className="navigation">
												<li className="dropdown">
													<Link to="/" style={{ textDecoration: "none" }}>
														Home
													</Link>
												</li>
												<li className="dropdown">
													<Link to="/about" style={{ textDecoration: "none" }}>
														About Us
													</Link>
													<ul>
														<li>
															<Link
																to="/about"
																style={{ textDecoration: "none" }}
															>
																About Us
															</Link>
														</li>
														<li>
															<Link
																to="/history"
																style={{ textDecoration: "none" }}
															>
																Company History
															</Link>
														</li>
														<li>
															<Link
																to="/team"
																style={{ textDecoration: "none" }}
															>
																Our Team
															</Link>
														</li>
													</ul>
												</li>
												<li className="dropdown">
													<Link
														to="/services"
														style={{ textDecoration: "none" }}
													>
														Services
													</Link>
													<ul>
														<li>
															<Link
																to="/prepaid"
																style={{ textDecoration: "none" }}
															>
																{" "}
																Prepaid
															</Link>
														</li>
														<li>
															<Link
																to="postpaid"
																style={{ textDecoration: "none" }}
															>
																{" "}
																Postpaid
															</Link>
														</li>
														<li>
															<Link
																to="billinfo"
																style={{ textDecoration: "none" }}
															>
																{" "}
																Bill Information
															</Link>
														</li>
														<li>
															<Link
																to="/paymentoption"
																style={{ textDecoration: "none" }}
															>
																{" "}
																Payment Options
															</Link>
														</li>
														<li>
															<Link
																to="/getelectricity"
																style={{ textDecoration: "none" }}
															>
																{" "}
																Getting Electricity
															</Link>
														</li>
														<li>
															<Link
																to="/customerservice"
																style={{ textDecoration: "none" }}
															>
																{" "}
																Customer Service Center
															</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link
														to="/contact"
														style={{ textDecoration: "none" }}
													>
														Contact Us
													</Link>
												</li>
											</ul>
										</div>
									</nav>
								</div>
								<div className="search-btn"></div>
								<div className="link-btn">
									<div className="pe-5">
										{userData.user && (
											<NavDropdown
												title={<PersonIcon />}
												id="navbarScrollingDropdown"
												className="pe-5"
											>
												<NavDropdown.Item as={Link} to="/profile">
													Profile
												</NavDropdown.Item>
												<NavDropdown.Item as={Link} to="/settings">
													Settings
												</NavDropdown.Item>
												<NavDropdown.Divider />
												<NavDropdown.Item
													as={Link}
													to="/logout"
													onClick={handlelogout}
												>
													Logout
												</NavDropdown.Item>
											</NavDropdown>
										)}
										{!userData.user && (
											<Link to="/login" className="nav-link">
												Login
											</Link>
										)}
									</div>
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
										<a href="/">
											{/* <img src="assets/images/custom/logo.png" alt="" /> */}
										</a>
									</div>
								</div>
								<div className="right-column">
									<div className="nav-outer">
										<div className="mobile-nav-toggler">
											{/* <img src="assets/images/icons/icon-bar.png" alt="" /> */}
										</div>

										<nav className="main-menu navbar-expand-md navbar-light"></nav>
									</div>
									<div className="search-btn"></div>
									<div className="link-btn">
										<a href="/login" className="theme-btn btn-style-one">
											Login
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mobile-menu">
					<div className="menu-backdrop"></div>
					<div className="close-btn">
						<span className="icon flaticon-remove"></span>
					</div>

					<nav className="menu-box">
						<div className="nav-logo">
							<a href="index.html">
								{/* <img src="assets/images/logo-two.png" alt="" title="" /> */}
							</a>
						</div>
						<div className="menu-outer"></div>
					</nav>
				</div>

				<div className="nav-overlay">
					<div className="cursor"></div>
					<div className="cursor-follower"></div>
				</div>
			</header>
		</div>
	);
}

export default Header;

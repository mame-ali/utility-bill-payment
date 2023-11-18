import React, { useContext, useEffect } from "react";
// import logo from "../../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PersonIcon from "@mui/icons-material/Person";
// import "./HeaderTwo.css";
import iconbar from "../../assets/template_assets/images/icons/icon-bar.png";
import logo1 from "../../assets/icons//new.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import HeaderTopNew from "./HeaderTopNew";
// import PersonIcon from "@mui/icons-material/Person";
function HeaderTwo(props) {
	const [userData, setUserData] = useContext(UserContext);

	const navigate = useNavigate();
	useEffect(async () => {
		console.log(userData.user["id"]);
		let id = userData.user["id"];
		// const response  = await axios.get(`/getuserRole/:${id}`);
		// console.log(response);
	}, []);
	const handlelogout = () => {
		setUserData({ ...userData, token: null }); // Update the token property
		navigate("/login");
		console.log(userData.token); // This may still log the old value due to closure, so it may not reflect the updated state immediately
		window.location.reload();
	};

	return (
		<div>
			<header className="main-header header-style-one">
				{!userData.user && <HeaderTop />}
				{/* <HeaderTopNew /> */}
				{/* <HeaderTop /> */}
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
												{!userData.user && (
													<li className="dropdown">
														<Link
															to="/about"
															style={{ textDecoration: "none" }}
														>
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
												)}
												{!userData.user && (
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
												)}
												{!userData.user && (
													<li>
														<Link
															to="/contact"
															style={{ textDecoration: "none" }}
														>
															Contact Us
														</Link>
													</li>
												)}
												{userData.user && (
													<li>
														<Link to="/news" style={{ textDecoration: "none" }}>
															Notification
														</Link>
													</li>
												)}
												{userData.user && (
													<li>
														<Link
															to="/bills"
															style={{ textDecoration: "none" }}
														>
															Bill
														</Link>
													</li>
												)}
												{userData.user && (
													<li>
														<Link
															to="/electricmeter"
															style={{ textDecoration: "none" }}
														>
															Electric meter
														</Link>
													</li>
												)}
												{userData.user && (
													<li>
														<Link to="/read" style={{ textDecoration: "none" }}>
															Read
														</Link>
													</li>
												)}
												{userData.user && userData.user.userRole == "admin" && (
													<li>
														<Link
															to="/users"
															style={{ textDecoration: "none" }}
														>
															Users
														</Link>
													</li>
												)}
												{userData.user &&
													userData.user.userRole == "normal" && (
														<li>
															<Link
																to="/userbill"
																style={{ textDecoration: "none" }}
															>
																Your Bill
															</Link>
														</li>
													)}
												{userData.user && userData.user.userRole == "admin" && (
													<li>
														<Link
															to="/manageuser"
															style={{ textDecoration: "none" }}
														>
															Assign Role
														</Link>
													</li>
												)}
												{userData.user &&
													userData.user.userRole == "normal" && (
														<li>
															<Link
																to="/manageuser"
																style={{ textDecoration: "none" }}
															>
																Assign Role
															</Link>
														</li>
													)}
											</ul>
										</div>
									</nav>
								</div>
								<div className="search-btn"></div>
								<div class="link-btn">
									{!userData.user && (
										<Link
											to="/login"
											className="theme-btn btn-style-one"
											style={{ textDecoration: "none" }}
										>
											Login
										</Link>
									)}
									{userData.user && (
										<div className="">
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
													to="/"
													onClick={handlelogout}
												>
													Logout
												</NavDropdown.Item>
											</NavDropdown>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default HeaderTwo;

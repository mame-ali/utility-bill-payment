import React from "react";

function HeaderTop() {
	return (
		<div>
			<div className="header-top">
				<div className="auto-container">
					<div className="inner-container">
						<div className="left-column">
							<div className="text">
								<ul class="nav left" data-v-61a126ab="">
									<li class="mr-4" data-v-61a126ab="">
										<i class="fa fa-envelope" data-v-61a126ab=""></i>
										&nbsp;support@oictsolution
									</li>
									<li class="mr-4" data-v-61a126ab="">
										<i class="fa fa-map-marker" data-v-61a126ab=""></i>
										&nbsp;Saris, Addis Ababa, Ethiopia
									</li>
								</ul>
							</div>
							<div className="office-hour">
								<ul
									class="d-flex items-center justify-center flex-wrap justify-content-between mt-2"
									data-v-61a126ab=""
								>
									{/* <li data-v-61a126ab="">
										<button class="nav-link mr-4" data-v-61a126ab="">
											<span data-v-61a126ab="">
												<i class="fa fa-search" data-v-61a126ab=""></i>
											</span>
										</button>
									</li> */}
									<li data-v-61a126ab="">
										<a
											target="_blank"
											href="https://www.facebook.com/oict.solutions/"
											class="nav-link social-media-btn facebook"
											data-v-61a126ab=""
										>
											<i class="fab fa-facebook-f mr-5" data-v-61a126ab=""></i>
										</a>
									</li>
									<li data-v-61a126ab="">
										<a
											target="_blank"
											href="https://twitter.com/oict_solutions"
											class="nav-link social-media-btn twitter"
											data-v-61a126ab=""
										>
											<i class="fab fa-twitter mr-5" data-v-61a126ab=""></i>
										</a>
									</li>
									<li data-v-61a126ab="">
										<a
											target="_blank"
											href="https://t.me/abdisabancha"
											class="nav-link social-media-btn telegram"
											data-v-61a126ab=""
										>
											<i
												class="fab fa-telegram-plane mr-5"
												data-v-61a126ab=""
											></i>
										</a>
									</li>
									<li data-v-61a126ab="">
										<a
											target="_blank"
											href="https://youtu.be/ygfaE_3ICBo?si=Pengl7ZgWyN-mx8l"
											class="nav-link social-media-btn youtube"
											data-v-61a126ab=""
										>
											<i class="fab fa-youtube mr-5" data-v-61a126ab=""></i>
										</a>
									</li>

									<li data-v-61a126ab="" className="mr-4">
										<a
											class="nav-link"
											type="button"
											href="/faq"
											data-v-61a126ab=""
										>
											FAQ
										</a>
									</li>
									{/* <li class="nav-item dropdown mr-4" data-v-61a126ab="">
										<button title="Language" data-v-61a126ab="">
											<span data-v-61a126ab="">EN</span>
											<i class="fa fa-angle-down ml-1" data-v-61a126ab=""></i>
										</button>
										<ul class="dropdown-menu hover-target" data-v-61a126ab="">
											<li class="dropdown-item py-0 w-full" data-v-61a126ab="">
												<button
													class="nav-link w-full p-0 active"
													data-v-61a126ab=""
												>
													{" "}
													English{" "}
												</button>
											</li>
											<li class="dropdown-item py-0 w-full" data-v-61a126ab="">
												<button class="nav-link w-full p-0" data-v-61a126ab="">
													{" "}
													አማርኛ{" "}
												</button>
											</li>
										</ul>
									</li> */}
								</ul>
							</div>
						</div>
						<div className="right-column">
							<div className="phone-number">
								Call us on: <strong>+251918922553</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderTop;

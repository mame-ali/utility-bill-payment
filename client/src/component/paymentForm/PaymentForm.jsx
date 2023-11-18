import React from "react";

const ElectricityBillForm = () => {
	return (
		<div className="_3N3I">
			<div className="_2e1T">
				<div className="_2tzf">Pay Electricity Bill</div>
				<div className="_73rp">
					<div className="_12Jd">
						<div className="MGxf">
							<label className="_3M_F">
								<input
									id="radio0"
									name="serviceType"
									type="radio"
									value="electricity"
								/>
								<i className="_3DxO"></i>Electricity Boards
							</label>
						</div>
						<div className="MGxf">
							<label className="">
								<input
									id="radio1"
									name="serviceType"
									type="radio"
									value="apartments"
									checked
								/>
								<i className="_3DxO"></i>Apartments
							</label>
						</div>
					</div>
					<div className="_73rp">
						<ul>
							<li>
								<div tabIndex="1">
									<div className="_1exI">
										<input
											type="text"
											required
											autoComplete="off"
											value="Andhra Pradesh"
										/>
										<label>State</label>
										<i className="_2kBc"></i>
									</div>
								</div>
								<div className="_1aIc"></div>
							</li>
							<li>
								<div tabIndex="1">
									<div className="_1exI">
										<input type="text" required autoComplete="off" value="" />
										<label>Electricity Board</label>
										<i className="_2kBc"></i>
									</div>
								</div>
								<div className="_1aIc"></div>
							</li>
						</ul>
					</div>
					<div className="_1QiC">
						<div>
							<div className="_3qmY"></div>
						</div>
					</div>
					<div className="_3qmY"></div>
					<div className="Qv6E">
						<button className="_11kC _15qf _2qE6">Proceed</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElectricityBillForm;

import React from "react";
import "./GettingElectric.css"; // CSS file for styling

const GettingElectric = () => {
	return (
		<div className="getting-electricity-container">
			<h2 className="getting-electricity-header">
				Prerequisites to Get Electric Service
			</h2>
			<div className="getting-electricity-content">
				<h3 className="getting-electricity-subheader">
					For a New Connection - Single Phase Meter
				</h3>
				<ul className="getting-electricity-list">
					<li className="getting-electricity-item">
						The applicant's resident ID, passport, or driver's license
					</li>
					<li className="getting-electricity-item">One 3 by 4 photograph</li>
					<li className="getting-electricity-item">
						If it is a rental house, a letter of agreement from the owner
					</li>
					<li className="getting-electricity-item">
						Final bill of electricity consumption if for power upgrade or
						additional meter
					</li>
					<li className="getting-electricity-item">
						If the request is for a partnership association, a copy of the
						partnership certification document, subject to the conditions
						mentioned in number 1
					</li>
				</ul>

				<h3 className="getting-electricity-subheader">
					Residents Living in Government-Managed Houses or Places
				</h3>
				<p className="getting-electricity-paragraph">
					Residents living in houses and places managed by the government can
					benefit from the service in two ways:
				</p>
				<ul className="getting-electricity-list">
					<li className="getting-electricity-item">
						The service will be allowed when the tenant who has contracted the
						house on behalf of the government is approved by the relevant
						government body and the user presents an identity card, but any
						responsibility will be the government body that manages the house.
					</li>
					<li className="getting-electricity-item">
						When a tenant of a government/kebele/house submits a lease
						agreement, he can get the service in the name of the tenant. The
						tenant will be fully responsible for the responsibility given.
					</li>
				</ul>

				<h3 className="getting-electricity-subheader">
					For Limited Liability Private Company
				</h3>
				<p className="getting-electricity-paragraph">
					In the case of a limited liability private company, the following
					documents are required:
				</p>
				<ul className="getting-electricity-list">
					<li className="getting-electricity-item">
						The company's registration certificate
					</li>
					<li className="getting-electricity-item">
						Identification of the general manager of the company
					</li>
				</ul>

				<h3 className="getting-electricity-subheader">
					Inspection/Estimation for Single Phase
				</h3>
				<p className="getting-electricity-paragraph">
					Inspection/estimation fee: 90 Birr
				</p>

				<h3 className="getting-electricity-subheader">
					For Three-Phase and High-Energy Seekers
				</h3>
				<p className="getting-electricity-paragraph">
					In addition to the evidence mentioned above for single-phase service,
					the following documents are required:
				</p>
				<ul className="getting-electricity-list">
					<li className="getting-electricity-item">
						Certificate stating the completion of the internal electrical line
						inspection issued by an authority/contractor licensed for electrical
						work
					</li>
					<li className="getting-electricity-item">
						For 14 kW or more, an electrical design plan must be submitted
					</li>
				</ul>

				<h3 className="getting-electricity-subheader">
					Inspection and Assessment Fees for Provision of the Service
				</h3>
				<p className="getting-electricity-paragraph">
					The inspection and assessment fees are as follows:
				</p>
				<ul className="getting-electricity-list">
					<li className="getting-electricity-item">
						300 Birr for a three-phase meter
					</li>
					<li className="getting-electricity-item">
						From 24 kW to 120 kW: 500 Birr
					</li>
					<li className="getting-electricity-item">
						From 121 kilowatts to 1 megawatt: 5000 Birr
					</li>
					<li className="getting-electricity-item">
						More than 1 MW: 10,000 Birr
					</li>
				</ul>
			</div>
		</div>
	);
};

export default GettingElectric;

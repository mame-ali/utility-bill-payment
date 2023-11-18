import React from "react";
import { Link } from "react-router-dom";

function AdminM2() {
	return (
		<div>
			<div className="admin-menu">
				<h2>Welcome Admin</h2>
			</div>
			<div className="list-group">
				<Link to="/admin" className="list-group-item">
					Dashboard
				</Link>
				<Link to="/users" className="list-group-item">
					Users
				</Link>
				<Link to="/electricmeter" className="list-group-item">
					Electric Meter
				</Link>
				<Link to="/bill" className="list-group-item">
					Bill
				</Link>
				{/* Other links */}
			</div>
		</div>
	);
}

export default AdminM2;

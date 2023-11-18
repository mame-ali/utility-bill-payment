import React from "react";
// import "./AdminMenu.css";
import { Link } from "react-router-dom";
function AdminMenu(props) {
	return (
		<div>
			<div className="admin-menu">
				<h2>Well Come Admin</h2>
			</div>
			<div className="list-group">
				<Link to="/admin/dashboard" className="list-group-item">
					Dashboard
				</Link>
				<Link to="/admin/users" className="list-group-item">
					Users
				</Link>
				<Link to="/admin/electricmeter" className="list-group-item">
					Electric Meter
				</Link>
				<Link to="/admin/bills" className="list-group-item">
					Bill
				</Link>
				<Link to="/admin/assignrole" className="list-group-item">
					Assign Role
				</Link>
				<Link to="/admin/add-customer" className="list-group-item">
					Add User
				</Link>
				<Link to="/admin/addelectricmeter" className="list-group-item">
					Add Electric Meter
				</Link>
				<Link to="/admin/services" className="list-group-item">
					Services
				</Link>
				<Link to="/admin/services" className="list-group-item">
					Send Notification
				</Link>
			</div>
		</div>
	);
}

export default AdminMenu;

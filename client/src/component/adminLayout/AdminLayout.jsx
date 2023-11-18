import React from "react";
import AdminMenu from "../../component/adminMenu/AdminMenu";
import { Outlet } from "react-router-dom";

function AdminLayout() {
	return (
		<div className="container-fluid admin-pages">
			<div className="row">
				<div className="col-md-3 admin-left-side">
					<AdminMenu />
				</div>
				<div className="col-md-9 admin-right-side">
					<Outlet />{" "}
					{/* This will render the content for the respective routes */}
				</div>
			</div>
		</div>
	);
}

export default AdminLayout;

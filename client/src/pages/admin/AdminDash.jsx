import React from "react";
// Import the AddEmployeeForm component
// import AddEmployeeForm from "../../components/Admin/AddEmployeeForm/AddEmployeeForm";
// Import the AdminMenu component
import AdminMenu from "../../component/adminMenu/AdminMenu";
// import Users from "../users/Users";
// import AdminDash from "./Dashboard";
// import Dashboard from "./Dashboard";
import Dashboard22 from "./Dashboard22";

function AdminDash(props) {
	return (
		<div>
			<div className="container-fluid admin-pages">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<AdminMenu />
					</div>
					<div className="col-md-9 admin-right-side">
						{/* <Dashboard /> */}
						<Dashboard22 />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminDash;

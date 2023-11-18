import React from "react";
// Import the AddEmployeeForm component
// import AddEmployeeForm from "../../components/Admin/AddEmployeeForm/AddEmployeeForm";
// Import the AdminMenu component
import AdminMenu from "../../component/adminMenu/AdminMenu";
// import Users from "../users/Users";
import Electric from "../electric/Electric";

function AdminElectric(props) {
	return (
		<div>
			<div className="container-fluid admin-pages">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<AdminMenu />
					</div>
					<div className="col-md-9 admin-right-side">
						{/* <AddEmployeeForm /> */}
						{/* <Users /> */}
						<Electric />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminElectric;

import "./Manageuser.css";
import React from "react";
import axios from "axios"; // Import axios
import UpdateRole from "./UpdateRole";

const Manageuser = () => {
	const onUpdateRole = async (user_id, newRole) => {
		try {
			const response = await axios.post(`/users/assignrole/${user_id}`, {
				org_role: newRole,
			});

			if (response.status === 200) {
				console.log("User role updated successfully");
			} else {
				console.error("Error updating user role");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="manage-user-container">
			<h1 className="manage-user-heading">User Management</h1>
			<UpdateRole onUpdateRole={onUpdateRole} />
		</div>
	);
};

export default Manageuser;

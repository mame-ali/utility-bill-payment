import "./UpdateRole.css";
import React, { useState } from "react";
import axios from "../../utils/axios";
const UpdateRole = ({ onUpdateRole }) => {
	const [user_id, setuser_id] = useState("");
	const [newRole, setNewRole] = useState("");

	const handleUpdateRole = async (e) => {
		e.preventDefault();
		console.log(user_id, newRole);
		const formData = {
			user_id,
			newRole,
		};
		try {
			const response = await axios.post("/users/assignrole", formData);
			console.log(response);
			alert(response.data.msg);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="update-role-container">
			<input
				name="user_id"
				type="text"
				placeholder="User ID"
				value={user_id}
				onChange={(e) => setuser_id(e.target.value)}
				className="update-role-input"
			/>
			<select
				name="newRole"
				onChange={(e) => setNewRole(e.target.value)}
				value={newRole}
				className="update-role-select"
			>
				<option value="normal">normal</option>
				<option value="reader">reader</option>
				<option value="admin">admin</option>
			</select>
			<button onClick={handleUpdateRole} className="update-role-button">
				Update Role
			</button>
		</div>
	);
};

export default UpdateRole;

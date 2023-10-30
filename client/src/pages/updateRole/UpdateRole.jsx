import "./UpdateRole.css";
import React, { useState } from "react";

const UpdateRole = ({ onUpdateRole }) => {
	const [user_id, setuser_id] = useState("");
	const [newRole, setNewRole] = useState("normal");

	const handleUpdateRole = () => {
		onUpdateRole(user_id, newRole);
		setuser_id("");
	};

	return (
		<div className="update-role-container">
			<input
				type="text"
				placeholder="User ID"
				value={user_id}
				onChange={(e) => setuser_id(e.target.value)}
				className="update-role-input"
			/>
			<select
				onChange={(e) => setNewRole(e.target.value)}
				value={newRole}
				className="update-role-select"
			>
				<option value="normal">Normal</option>
				<option value="reader">Reader</option>
				<option value="admin">Admin</option>
			</select>
			<button onClick={handleUpdateRole} className="update-role-button">
				Update Role
			</button>
		</div>
	);
};

export default UpdateRole;

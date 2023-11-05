import React, { useState } from "react";
import DataTable from "../../component/dataTable/DataTable";
import Add from "../../component/add/Add.jsx";
import "./users.css";
const Users = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="wrapper">
			<h1 className="text-center">Users</h1>
			<DataTable first="users/users" />
			{open && <Add name="users" columns={columns} setOpen={setOpen} />}
		</div>
	);
};

export default Users;

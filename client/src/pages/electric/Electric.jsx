import React, { useState } from "react";
import DataTable from "../../component/dataTable/DataTable";
import Add from "../../component/add/Add";
import { Link } from "react-router-dom";
// import "./Electric.css";

const Electric = () => {
	const [open, setOpen] = useState(false);

	const handleAddUserClick = () => {
		console.log("object");
		setOpen(true);
	};

	return (
		<div className="electric">
			<div className="info centercontent">
				<h1>Electric</h1>
				<Link to="/addelectricmeter" className="btn btn-primary">
					Add New User
				</Link>
			</div>
			<DataTable first="users/electricmeters" />
			{open && <Add name="users" columns={columns} setOpen={setOpen} />}
		</div>
	);
};

export default Electric;

import React, { useContext, useEffect } from "react";
import DataTableCopy from "../../component/dataTable/DataTablecopy copy";
import Add from "../../component/add//Add";
import { UserContext } from "../../context/UserContext";
// import { UserContext } from "../../context/UserContext";
import "./bill.css";
import { useNavigate } from "react-router-dom";

const Bill = () => {
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		// Check if userData.user exists before accessing its properties
		if (userData.user && userData.user.id) {
			console.log(userData.user.id);
		}
	}, []);

	return (
		<div className="bill_wrapper">
			<div className="info centercontent">
				<h1 className="text-center">Electric Bill</h1>
			</div>
			{userData.user && <DataTableCopy first={`users/bills`} />}
		</div>
	);
};

export default Bill;

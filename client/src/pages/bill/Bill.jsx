import React, { useContext, useEffect } from "react";
import DataTableCopy from "../../component/dataTable/DataTablecopy copy";
import Add from "../../component/add//Add";
import { UserContext } from "../../context/UserContext";
// import { UserContext } from "../../context/UserContext";
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
		<div>
			<div className="info centercontent">
				<h1>Electric Bill</h1>
			</div>
			{userData.user && <DataTableCopy first={`users/bills/`} />}
		</div>
	);
};

export default Bill;

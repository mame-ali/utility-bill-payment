import React, { useState } from "react";
import axios from "../../utils/axios";
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TextField,
	Button,
} from "@material-ui/core";
import "./UserBill.css";

const UserBill = () => {
	const [accountNumber, setAccountNumber] = useState("");
	const [userBill, setUserBill] = useState([]);

	const handleAccountNumberChange = (e) => {
		setAccountNumber(e.target.value);
	};

	const fetchBillInfo = () => {
		axios
			.get(`/bills/getbills/${accountNumber}`)
			.then((response) => {
				setUserBill(response.data.data);
			})
			.catch((error) => {
				console.error("Error fetching bill:", error);
				setUserBill([]);
			});
	};

	return (
		<div className="user-bill-container text-center">
			<TextField
				type="text"
				value={accountNumber}
				onChange={handleAccountNumberChange}
				label="Enter Account Number"
				variant="outlined"
				className="user-bill-input"
			/>
			<Button
				onClick={fetchBillInfo}
				variant="contained"
				color="primary"
				className="user-bill-button"
			>
				Get Bill
			</Button>
			<div className="user-bill-info">
				<h2>User Bill Information</h2>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>First Name</TableCell>
							<TableCell>Last Name</TableCell>
							<TableCell>Account Number</TableCell>
							<TableCell>Month</TableCell>
							<TableCell>Tarif Diff</TableCell>
							<TableCell>Amount</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{userBill.map((bill) => (
							<TableRow key={bill.bill_id}>
								<TableCell>{bill.f_name}</TableCell>
								<TableCell>{bill.l_name}</TableCell>
								<TableCell>{bill.account_number}</TableCell>
								<TableCell>{bill.bill_month}</TableCell>
								<TableCell>{bill.ec_range}</TableCell>
								<TableCell>{bill.bill_amount} Birr</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default UserBill;

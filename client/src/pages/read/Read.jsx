import React, { useEffect, useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "../../utils/axios";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./read.css";

const Read = () => {
	const [electricMeterId, setElectricMeterId] = useState("");
	const [readData, setReadData] = useState("");
	const [month, setMonth] = useState("");
	const [users2, setUser2] = useState([]);
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate();
	const monthOptions = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("users/meterread");
				if (
					Array.isArray(response.data.results) &&
					response.data.results.length > 0
				) {
					const accountNumbersFromResponse = response.data.results.map(
						(user) => user.account_number
					);
					setUser2(accountNumbersFromResponse);
					console.log(accountNumbersFromResponse);
				} else {
					console.error("No user data found in the response.");
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			account_number: electricMeterId,
			read_data: readData,
			month: month,
			user_id: userData.user.id,
		};
		try {
			const response = await axios.post("users/insertreaddata", formData);
			console.log(response);
			alert(response.data.msg);
			// navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className="read d-block">
			<h1 className="text-center">Meter Read Form</h1>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Col>
						<Form.Group controlId="electricMeterId" className="addElectric">
							<Form.Label className="addElectric">Account Number</Form.Label>
							<Form.Control
								as="select"
								value={electricMeterId}
								onChange={(e) => setElectricMeterId(e.target.value)}
							>
								<option value="">Select Account Number</option>
								{users2.map((user) => (
									<option key={user} value={user}>
										{user}
									</option>
								))}
							</Form.Control>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="readData" className="addElectric">
							<Form.Label className="addElectric">Read Data</Form.Label>
							<Form.Control
								type="number"
								value={readData}
								onChange={(e) => setReadData(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group controlId="month" className="addElectric">
							<Form.Label className="addElectric">Month</Form.Label>
							<Form.Select
								value={month}
								onChange={(e) => setMonth(e.target.value)}
								required
							>
								<option value="">Select Month</option>
								{monthOptions.map((option, index) => (
									<option key={index} value={option}>
										{option}
									</option>
								))}
							</Form.Select>
						</Form.Group>
					</Col>
				</Row>
				<Button variant="primary" type="submit" className="addElectric">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Read;

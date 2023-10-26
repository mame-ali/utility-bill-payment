import React, { useState } from "react";
import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
} from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
// import "./ConfirmOtpSecond.css";

const ConfirmOtpSecond = () => {
	const [otp, setOtp] = useState("");
	const location = useLocation();
	const navigate3 = useNavigate();
	// Access the email from the location state
	const { email } = location.state || {};

	const handleOtpChange = (e) => {
		setOtp(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = {
			user_email: email,
			otp: otp,
		};

		try {
			const response = await axios.post("users/confirmotp", formData);
			alert(response.data.msg);
			navigate3("/login"); // Pass the email to the next component
		} catch (error) {
			alert(error.response.data.msg);
			console.log(error);
		}
	};

	return (
		<Container>
			<Grid container justify="center" className="mt-5">
				<Grid item md={6}>
					<Typography variant="h2" className="mb-4">
						Confirm OTP
					</Typography>
					{/* Display the email if it's available */}
					{email && (
						<Typography variant="body1" className="mb-4">
							Email: {email}
						</Typography>
					)}
					<form onSubmit={handleSubmit}>
						<TextField
							id="otp"
							label="Enter OTP"
							type="text"
							placeholder="Enter the OTP sent to your email/phone"
							value={otp}
							onChange={handleOtpChange}
							required
							fullWidth
							variant="outlined"
							margin="normal"
						/>

						<Button
							variant="contained"
							color="primary"
							type="submit"
							className="mt-3"
						>
							Confirm
						</Button>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ConfirmOtpSecond;

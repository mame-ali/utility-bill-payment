import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import "./Forgotpass.css";

const ForgetPassword = () => {
	const [email, setEmail] = useState("");
	const navigate3 = useNavigate();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email);
		const formData = {
			user_email: email,
		};
		try {
			const response = await axios.post("users/forgetpassword", formData);
			// console.log(response);
			alert(response.data.msg);
			// localStorage.setItem("auth-token", loginRes.data.token);
			navigate3("/comfirmotp", { state: { email } });
		} catch (error) {
			alert(error.response.data.msg);
			console.log(error);
		}
	};

	return (
		<Container className="large-container">
			<div className="form-container">
				<Typography variant="h4" className="mt-5 text-white">
					Forgot Password
				</Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						id="email"
						label="Email address"
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={handleEmailChange}
						required
						fullWidth
						variant="outlined"
						margin="normal"
						InputLabelProps={{
							className: "text-white",
						}}
						InputProps={{
							className: "text-white",
						}}
					/>

					<Button
						variant="contained"
						color="primary"
						type="submit"
						className="mt-3"
						style={{ backgroundColor: "#3D38B8" }}
					>
						Reset Password
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default ForgetPassword;

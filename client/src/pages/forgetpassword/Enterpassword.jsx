import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./EnterPass.css";

const EnterPassword = () => {
	const location = useLocation();
	const navigate3 = useNavigate();
	const { email } = location.state || {};
	const [formData, setFormData] = useState({
		new_password: "",
		confirm_password: "",
	});

	const [errors, setErrors] = useState({
		new_password: "",
		confirm_password: "",
	});

	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { new_password, confirm_password } = formData;

		// Validate password match
		if (new_password !== confirm_password) {
			setErrors({
				...errors,
				confirm_password: "Passwords do not match",
			});
			return;
		}

		// If validation passes, you can proceed with changing the password logic here

		// Reset the form after a successful password change or handle errors.
		setErrors({
			new_password: "",
			confirm_password: "",
		});

		const formData2 = {
			user_password: formData.new_password,
			user_email: email,
		};

		console.log(formData2);

		try {
			const response = await axios.post("users/changePassword", formData2);
			alert(response.data.msg);
			navigate3("/login");
		} catch (error) {
			alert(error.response.data.msg);
			console.log(error);
		}
	};

	return (
		<Container className="container">
			<div className="form-container">
				<Typography variant="h4" className="mb-4">
					Change Password
				</Typography>
				{email && (
					<Typography variant="body1" className="mb-4">
						Email: {email}
					</Typography>
				)}
				<form onSubmit={handleSubmit}>
					<TextField
						id="new_password"
						label="New Password"
						type="password"
						placeholder="Enter new password"
						name="new_password"
						value={formData.new_password}
						onChange={handleChange}
						required
						fullWidth
						variant="outlined"
						margin="normal"
						error={!!errors.new_password}
						helperText={errors.new_password}
					/>

					<TextField
						id="confirm_password"
						label="Confirm Password"
						type="password"
						placeholder="Confirm new password"
						name="confirm_password"
						value={formData.confirm_password}
						onChange={handleChange}
						required
						fullWidth
						variant="outlined"
						margin="normal"
						error={!!errors.confirm_password}
						helperText={errors.confirm_password}
					/>

					<Button
						variant="contained"
						color="primary"
						type="submit"
						className="mt-3"
					>
						Change Password
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default EnterPassword;

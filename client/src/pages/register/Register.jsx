import React, { useState } from "react";
import {
	Container,
	TextField,
	Button,
	InputAdornment,
} from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./register.css";
import axios from "../../utils/axios";

function Signup() {
	const [formData, setFormData] = useState({
		user_email: "",
		user_password: "",
		confirm_password: "",
		f_name: "",
		m_name: "",
		l_name: "",
		phone: "",
	});

	const navigate3 = useNavigate();

	const [errors, setErrors] = useState({
		user_email: "",
		user_password: "",
		confirm_password: "",
		f_name: "",
		m_name: "",
		l_name: "",
		phone: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	const nameRegex = /^[A-Za-z]+$/;
	const phoneRegex = /^(?:\+251|0)[1-9]\d{8}$/;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formvalidation()) {
			try {
				const response = await axios.post("users/createuser", formData);
				console.log(response);
				alert(response.data.msg);

				navigate3("/comfotpsec", {
					state: { email: formData.user_email },
				});
			} catch (error) {
				alert(error.response.data.msg);
				console.log(error);
			}
		}
	};

	const formvalidation = () => {
		// Validate email format
		if (!emailRegex.test(formData.user_email)) {
			setErrors({
				...errors,
				user_email: "Invalid email format",
			});
			return;
		}

		// Validate password match
		if (formData.user_password !== formData.confirm_password) {
			setErrors({
				...errors,
				confirm_password: "Passwords do not match",
			});
			return;
		}

		// Validate name fields
		if (!nameRegex.test(formData.f_name)) {
			setErrors({
				...errors,
				f_name: "Invalid first name format",
			});
			return;
		}

		if (!nameRegex.test(formData.l_name)) {
			setErrors({
				...errors,
				l_name: "Invalid last name format",
			});
			return;
		}

		// Validate phone field
		if (!phoneRegex.test(formData.phone)) {
			setErrors({
				...errors,
				phone: "Invalid phone number format (10 digits)",
			});
			return;
		}

		setErrors({
			user_email: "",
			user_password: "",
			confirm_password: "",
			f_name: "",
			m_name: "",
			l_name: "",
			phone: "",
		});

		return 1;
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const toggleShowConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};
	return (
		<Container
			style={{ marginTop: "50px" }}
			maxWidth="sm"
			className="container"
		>
			<form onSubmit={handleSubmit} className="form">
				<h2>Signup</h2>
				<div className="form-group">
					<TextField
						fullWidth
						label="First Name"
						name="f_name"
						value={formData.f_name}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Middle Name"
						name="m_name"
						value={formData.m_name}
						onChange={handleChange}
					/>
					<TextField
						fullWidth
						label="Last Name"
						name="l_name"
						value={formData.l_name}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Email"
						name="user_email"
						value={formData.user_email}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Password"
						name="user_password"
						type={showPassword ? "text" : "password"}
						value={formData.user_password}
						onChange={handleChange}
						required
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<FontAwesomeIcon
										icon={showPassword ? faEyeSlash : faEye}
										onClick={toggleShowPassword}
									/>
								</InputAdornment>
							),
						}}
					/>
					<TextField
						fullWidth
						label="Confirm Password"
						name="confirm_password"
						type={showConfirmPassword ? "text" : "password"}
						value={formData.confirm_password}
						onChange={handleChange}
						required
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<FontAwesomeIcon
										icon={showConfirmPassword ? faEyeSlash : faEye}
										onClick={toggleShowConfirmPassword}
									/>
								</InputAdornment>
							),
						}}
					/>
					{/* Rest of the code */}
				</div>
				<Button type="submit" variant="contained" color="primary">
					Sign Up
				</Button>
				<div className="links">
					Already have an account?{" "}
					<span>
						<Link to="/login">Login</Link>
					</span>
				</div>
			</form>
		</Container>
	);
}

export default Signup;

import React, { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../../utils/axios";
import { UserContext } from "../../context/UserContext";
import "./Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const [userData, setUserData] = useContext(UserContext);
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const validateEmail = (email) => {
		// Regular expression for a valid email format
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailRegex.test(email);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		// Validate email and password
		if (!validateEmail(email)) {
			// Handle invalid email format
			alert("Invalid email format");
			return;
		}

		let formData = {
			email: email,
			password: password,
		};

		try {
			const response = await axios.post("/users/login", formData);
			console.log(response);
			alert(response.data.msg);
			setUserData({
				token: response.data.token,
				user: response.data.user,
			});
			navigate("/");
		} catch (error) {
			alert(error.response.data.msg);
			console.log(error);
		}
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="container">
			<form className="form" onSubmit={handleLogin}>
				<h2>Login</h2>
				<div className="form-group">
					<TextField
						type="email"
						id="email"
						label="Email address"
						placeholder="Enter email"
						value={email}
						onChange={handleEmailChange}
						required
						fullWidth
					/>
				</div>

				<div className="form-group">
					<TextField
						type={showPassword ? "text" : "password"}
						id="password"
						label="Password"
						placeholder="Password"
						value={password}
						onChange={handlePasswordChange}
						required
						fullWidth
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
				</div>

				<Button type="submit" variant="contained" color="primary" fullWidth>
					Login
				</Button>
				<div className="links">
					<Link to="/forgetpassword">Forget Password</Link>
					<Link to="/signup">Create an account</Link>
				</div>
			</form>
		</div>
	);
}

export default Login;

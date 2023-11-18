import React, { useState } from "react";
import axios from "../../utils/axios";

const Notification = () => {
	const [user_id, setUser_id] = useState("");
	const [message, setMessage] = useState("");
	const [user_email, setUser_email] = useState("");
	const [user_name, setUser_name] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post("/users/notification", {
				user_id,
				message,
				user_email,
				user_name,
			});
		} catch (error) {
			console.error("Error sending email:", error);
		}
	};

	return (
		<div>
			<h1>Bill Notification</h1>
			<form onSubmit={handleSubmit}>
				<label>User ID:</label>
				<input
					type="text"
					value={user_id}
					onChange={(e) => setUser_id(e.target.value)}
					required
				/>

				<label>Message:</label>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				></textarea>

				<label>User Email:</label>
				<input
					type="email"
					value={user_email}
					onChange={(e) => setUser_email(e.target.value)}
					required
				/>

				<label>User Name:</label>
				<input
					type="text"
					value={user_name}
					onChange={(e) => setUser_name(e.target.value)}
					required
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Notification;

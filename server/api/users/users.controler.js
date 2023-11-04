import userService from "./users.service.js";
//Importing bcryptJs module to use password encryption
import bcrypt from "bcryptjs";
//Importing database structure
import { connection } from "../../config/db.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
//import { upload } from '../../config/multer.js';
import dotenv from "dotenv";
dotenv.config();
let verify_data;

const userController = {
	//create user
	createUser: (req, res) => {
		const { user_email, user_password, f_name, m_name, l_name, phone } =
			req.body;
		if (
			!user_email ||
			!user_password ||
			!f_name ||
			!m_name ||
			!l_name ||
			!phone
		) {
			res.json({ status: "failed", msg: "all fields are reqired" });
		}
		// if email is used before
		userService.getUserByEmail(user_email, (err, results) => {
			if (err) {
				console.log(err);
				return res
					.status(500)
					.json({ msg: "database connection err during  email checking" });
			}

			if (results.length) {
				return res.status(500).json({ msg: "email is already registered" });
			} else {
				//password encryption
				const salt = bcrypt.genSaltSync();
				req.body.user_password = bcrypt.hashSync(user_password, salt);
				//otp genarate
				const otp = generateRandomSixDigitNumber();
				//send otp to email
				sendEmail(user_email, otp);
				req.body.otp = otp;
				// console.log(req.body);
				let user_id;
				//insert data
				userService.createUser(req.body, (err, results) => {
					if (err) {
						console.log(err);
						return res.status(500).json({
							msg: "database connection err during inserting users data11",
						});
					}
					user_id = results.insertId;
					req.body.user_id = user_id;
					//  console.log(`in ${req.body.user_id}`)
					// console.log(`out ${user_id}`)
					userService.addUserPassword(req.body, (err, results) => {
						if (err) {
							console.log(err);
							return res.status(500).json({
								msg: "database connection err during inserting users data",
							});
						}
					});
					userService.addUserInfo(req.body, (err, results) => {
						if (err) {
							console.log(err);
							return res.status(500).json({
								msg: "database connection err during inserting users info",
							});
						}
					});

					userService.addUserrole(req.body, (err, results) => {
						if (err) {
							console.log(err);
							return res.status(500).json({
								msg: "database connection err during inserting users role",
							});
						}

						return res.json({
							status: "sucess",
							msg: "user created sucessfuly",
						});
					});
				});
			}
		});
	},
	getUserRole: (req, res) => {
		const user_id = req.params.id;
		if (!user_id) {
			return res.status(500).json({
				msg: "please login",
			});
		}
		userService.getUserRole(user_id, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).json({ msg: "database connection err" });
			}
			return res.status(200).json({
				msg: "sucess",
				userRole: results[0].org_role_name,
			});
		});
	},
	insertReadData: (req, res) => {
		console.log(req.body);
		userService.getAllusersbyAccount(
			req.body.account_number,
			(err, results) => {
				if (err) {
					console.log(err);
					return res
						.status(500)
						.json({ msg: "database connection err during email checking" });
				}

				req.body.electric_meter_id = results[0].electric_meter_id;
				const ggg = results[0].electric_meter_id;

				userService.insertIntoRead(req.body, (err, results) => {
					if (err) {
						console.log(err);
						return res
							.status(500)
							.json({ msg: "database connection err during email checking" });
					}

					userService.getPrevBillInfo(
						req.body.electric_meter_id,
						(err, results2) => {
							if (err) {
								console.log(err);
								return res.status(500).json({ msg: "database connection err" });
							}

							if (!results2.length) {
								console.log(results2[1]);
								return res
									.status(200)
									.json({ msg: "first read", status: "success" });
							} else {
								const electric_meter_id = req.body.electric_meter_id;
								const { read_data, month } = results2[1];
								console.log(month);
								const range =
									parseInt(req.body.read_data) - parseInt(read_data);
								const bill_amount = 2 * range;
								const formdata = {
									electric_meter_id,
									range,
									bill_amount,
									month,
								};

								userService.InsertBill(formdata, (err, results) => {
									if (err) {
										console.log(err);
										return res.status(500).json({
											msg: "database connection err during email checking",
										});
									}

									console.log(results);
									res.status(200).json({
										status: "success",
										msg: "read data inserted successfully",
									});
								});
							}
						}
					);
				});
			}
		);
	},

	//assignRole
	// assignRole: (req, res) => {
	//   const { id } = req.body;
	//   userService.assignRole( id,
	//     (err, results) => {
	//       if (err) {
	//         console.log(err);
	//         return res.status(500).json({ msg: "database connection err during  email checking", });
	//       }
	//       res.status(200).json({ results });
	//     }
	//   )

	// },
	// all users list
	AllUser: (req, res) => {
		userService.getAllusersInfo((err, results) => {
			if (err) {
				console.log(err);
				return res
					.status(500)
					.json({ msg: "database connection err during  email checking" });
			}
			res.status(200).json({ results });
		});
	},
	//AllMetersRead
	AllMetersRead: (req, res) => {
		userService.getAllMeterRead((err, results) => {
			if (err) {
				console.log(err);
				return res
					.status(500)
					.json({ msg: "database connection err during  email checking" });
			}
			res.status(200).json({ results });
		});
	},
	// all electric meter list
	AllElectricMeters: (req, res) => {
		userService.getAllElectricMeterInfo((err, results) => {
			if (err) {
				console.log(err);
				return res
					.status(500)
					.json({ msg: "database connection err during  email checking" });
			}
			res.status(200).json({ results });
		});
	},

	// confirm OTP
	confirmOtp: (req, res) => {
		const { user_email, otp } = req.body;
		userService.getOTPByEmail(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res
					.status(500)
					.json({ msg: "database connection err during  email checking" });
			}
			if (!results.length) {
				return res
					.status(500)
					.json({ status: "failed ", msg: "incorrect otp" });
			}
			if (results.length) {
				const data = {
					user_active_status: 1,
					user_email: user_email,
				};
				userService.updateUserActiveStatus(data, (err, results) => {
					if (err) {
						console.log(err);
						return res
							.status(500)
							.json({ msg: "database connection err during  email checking" });
					}
					// console.log(results);
					// res.send("sucess");
				});
			}

			res.json({ status: "sucsess", msg: "email sucessfully confirmed" });
			// console.log(results);
		});
	},

	//login
	login: (req, res) => {
		const { email, password } = req.body;
		let userRole;
		console.log(req.body);
		//validation
		if (!email || !password)
			return res
				.status(400)
				.json({ msg: "Not all fields have been provided!" });
		//check email existance
		userService.getUserByEmail(email, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).json({ msg: "database connection err" });
			}
			if (!results) {
				return res
					.status(404)
					.json({ msg: "No account with this email has been registered" });
			}
			let user_id = results[0].user_id;

			// check password
			userService.getUserpasswordByid(user_id, (err, results2) => {
				if (err) {
					console.log(err);
					res.status(500).json({ msg: "database connection err" });
				}

				if (!results2) {
					return res
						.status(404)
						.json({ msg: "No account with this email has been registered" });
				}

				const isMatch = bcrypt.compareSync(password, results2[0].user_password);
				if (!isMatch)
					return res.status(404).json({
						msg: "Either the user name or password your entered is incorrect",
					});
				//get user Role
				userService.getUserRole(user_id, (err, results9) => {
					if (err) {
						console.log(err);
						res.status(500).json({ msg: "database connection err" });
					}
					userRole = results9[0]["org_role_name"];

					//token geneate
					const token = jwt.sign(
						{ id: results[0].user_id, email: email },
						process.env.JWT_SECRET,
						{ expiresIn: "30m" }
					);
					console.log({
						token,
						user: {
							id: results[0].user_id,
							email: email,
							userRole: userRole,
						},
						msg: "login sucessfully",
					});
					return res.json({
						token,
						user: {
							id: results[0].user_id,
							email: email,
							userRole: userRole,
						},
						msg: "login sucessfully",
					});
				});
			});
		});

		// console.log(isMatch )
		// });
	},

	// forget password
	forgetPassword: (req, res) => {
		const { user_email } = req.body;
		console.log(user_email);
		// if email is used befor
		userService.getUserByEmail(user_email, (err, results) => {
			if (err) {
				console.log(err);
				return res
					.status(500)
					.json({ msg: "database connection err during  email checking" });
			}
			if (results.length) {
				//otp genarate
				const otp = generateRandomSixDigitNumber();
				req.body.otp = otp;
				//send otp to email
				sendEmail(user_email, otp);
				userService.updateUserOtp(req.body, (err, results) => {
					if (err) {
						console.log(err);
						return res
							.status(500)
							.json({ msg: "database connection err during  email checking" });
					}
				});
				return res.json({ status: "sucess", msg: "opt send to email" });
			}
		});
	},

	//change password

	changePassword: (req, res) => {
		const { user_password, user_email } = req.body;
		console.log(req.body);

		if (!user_password || !user_email) {
			return res.status(400).json({ msg: "all fields are required" });
		}

		// Password encryption
		const salt = bcrypt.genSaltSync();
		req.body.user_password = bcrypt.hashSync(user_password, salt);

		//check email existance
		userService.getUserByEmail(user_email, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).json({ msg: "database connection err" });
			}
			if (!results) {
				return res
					.status(404)
					.json({ msg: "No account with this email has been registered" });
			}
			let user_id = results[0].user_id;
			req.body.user_id = user_id;
			userService.changepassword(req.body, (err, results) => {
				if (err) {
					console.log(err);
					return res.status(500).json({ msg: "Database connection error" });
				}
				return res.status(200).json({
					msg: "Password changed successfully",
					data: results,
				});
			});
		});
	},

	//get user info
	getUserById: (req, res) => {
		console.log(`###### ${req.user_id}`);
		userService.userById(req.user_id, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			if (!results) {
				return res.status(404).json({ msg: "Record not found" });
			}
			return res.status(200).json({ data: results });
		});
	},

	// asign role

	// add new electric meter
	addElectricMeter: (req, res) => {
		userService.addElectricMeter(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			req.body.electric_meter_id = results.insertId;
			userService.addElectricMeterAddress(req.body, (err, results) => {
				if (err) {
					console.log(err);
					return res.status(500).json({ msg: "database connection err" });
				}
				//return res.status(200).json({ status: "sucess",msg:"electric meter added sucessfully" });
			});
			const currentDate = new Date();
			const currentMonthName = currentDate.toLocaleString("default", {
				month: "long",
			});

			const formdata = {
				electric_meter_id: req.body.electric_meter_id,
				user_id: req.body.user_id,
				read_data: "0000000000",
				month: currentMonthName,
			};
			userService.insertIntoRead(formdata, (err, results) => {
				if (err) {
					console.log(err);
					return res
						.status(500)
						.json({ msg: "database connection err during  email checking" });
				}
			});

			return res
				.status(200)
				.json({ status: "sucess", msg: "electric meter added sucessfully" });
		});
	},

	// update electric meter info
	updateElectricMeter: (req, res) => {
		console.log(req.body);
		userService.updateElectricMeter(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res
				.status(200)
				.json({ status: "sucess", msg: "electric meter updated sucessfully" });
		});
	},

	// update Electric Meter Address
	updateElectricMeterAddress: (req, res) => {
		console.log(req.body);
		userService.updateElectricMeterAddress(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res.status(200).json({
				status: "sucess",
				msg: "electric meter Address updated sucessfully",
			});
		});
	},

	// delete Electric Meter
	deleteElectricMeter: (req, res) => {
		const electric_meter_id = req.params.id;
		userService.deleteElectricMeterAddress(
			electric_meter_id,
			(err, results) => {
				if (err) {
					console.log(err);
					return res.status(500).json({ msg: "database connection err" });
				}
				userService.deleteElectricMeter(electric_meter_id, (err, results) => {
					if (err) {
						console.log(err);
						return res.status(500).json({ msg: "database connection err" });
					}
				});
			}
		);
		return res
			.status(200)
			.json({ status: "sucess", msg: "electric meter deleted sucessfully" });
	},
	//etUserBill
	getUserBill: (req, res) => {
		const user_id = req.params.user_id;
		userService.getUserBill(user_id, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res.status(200).json({ results });
		});
	},
	getAllUsersBill: (req, res) => {
		userService.getAllUsersBill((err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			console.log(results);
			return res.status(200).json({ results });
		});
	},

	//userprofile from userinfo
	getUserProfile: (req, res) => {
		const user_id = req.params.user_id;
		userService.getUserProf(user_id, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res.status(200).json({ results });
		});
	},

	//updating role
	updateUserRole: (req, res) => {
		console.log(req.body);
		//const user_id = req.params.id; // Assuming you have a JWT-based authentication middleware
		const { newRole, user_id } = req.body;

		// Check if the user has the necessary permissions to perform this action (e.g., based on their current role or additional authentication checks).
		userService.getCompanyRole(newRole, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).json({ msg: "Database connection error" });
			} else {
				// console.log(results);
				const org_role_id = results[0].org_role_id;
				userService.updateUserRole(user_id, org_role_id, (err) => {
					if (err) {
						console.log(err);
						res.status(500).json({ msg: "Database connection error" });
					} else {
						res.status(200).json({ msg: `User role updated to ${newRole}` });
					}
					console.log(`Role is updated to ${newRole}`);
				});
			}
		});
	},

	//updatetwo
	updateByAdmin: (req, res) => {
		const user_id = req.params.id;
		const { userRole } = req.body;
		let updateGoods = `UPDATE org_role SET org_role_name='${userRole}' WHERE org_role_id=${user_id}`;
		connection.query(updateGoods, (err) => {
			if (err) {
				// console.log(err)
			} else {
				res.send({
					successMessage: "Goods updated successfully",
					redirect: "/admin",
					message: "Click Here Go Back To Admin Page",
				});
			}
		});
	},
	//delete user
	deleteUser: (req, res) => {
		const user_id = req.params.id;
		userService.deleteUser(user_id, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			userService.deleteUserInfo(user_id, (err, results) => {
				if (err) {
					console.log(err);
					return res.status(500).json({ msg: "database connection err" });
				}
			});
			userService.deleteUserRole(user_id, (err, results) => {
				if (err) {
					console.log(err);
					return res.status(500).json({ msg: "database connection err" });
				}
			});
		});
		// console.log("betam arif");
		return res
			.status(200)
			.json({ status: "sucess", msg: "user deleted sucessfully" });
	},
	// deleteUser: (req, res) => {
	// 	const user_id = req.params.id;

	// 	// Use Promises or async/await for better error handling
	// 	Promise.all([
	// 		userService.deleteUser(user_id),
	// 		userService.deleteUserInfo(user_id),
	// 		userService.deleteUserRole(user_id),
	// 	])
	// 		.then(() => {
	// 			return res
	// 				.status(200)
	// 				.json({ status: "success", msg: "User deleted successfully" });
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 			return res.status(500).json({ msg: "Database connection error" });
	// 		});
	// },
};

export default userController;

//---------------------------------------------------//
const generateRandomSixDigitNumber = () => {
	return Math.floor(Math.random() * 900000 + 100000);
};

// Function to send email
const sendEmail = async (user_email, v_code) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL,
			to: user_email,
			subject: "Email Confirmation",
			text: `Your Utility Bill verification code is ${v_code}`,
		};

		await transporter.sendMail(mailOptions);
		console.log("Email sent successfully!");
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
};

//----------------------------------------------------//

const calculatebill = (data) => {
	const { electric_meter_id, month, read_data } = data;
};

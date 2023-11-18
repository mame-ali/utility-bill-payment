import { connection } from "../../config/db.js";
import query from "../../query/query.js";

const userService = {
	//data comes form the user controller
	createUser: (data, callback) => {
		const insertIntoUsers = query.insertIntoUsers;

		connection.query(
			insertIntoUsers,
			[data.user_email, data.otp],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	// add user password
	addUserPassword: (data, callback) => {
		const insertIntoUsersPassword = query.insertIntoUsersPassword;
		//console.log(data);
		connection.query(
			insertIntoUsersPassword,
			[data.user_id, data.user_password],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	//assignRole
	// assignRole: (data, callback) => {
	//     const insertIntoUsersrole = query.insertIntoUsersrole;
	//     connection.query(insertIntoUsersrole,
	//         [
	//             2,
	//             data.user_id,

	//         ],
	//         (error, result, fields) => {
	//          if (error) {return callback(error);}
	//             return callback(null, result);
	//         })
	// },
	//get All Users Data
	getAllusersInfo: (callback) => {
		const getAllUsersData = query.getAllUsersData;
		connection.query(
			getAllUsersData,

			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	getAllMeterRead: (callback) => {
		const getAccout = query.getAccout;
		connection.query(
			getAccout,

			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	//getAllusersbyAccount
	getAllusersbyAccount: (data, callback) => {
		const getelectric_meterbyAccount = query.getelectric_meterbyAccount;
		connection.query(
			getelectric_meterbyAccount,
			[data],

			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	//insertIntoRead
	insertIntoRead: (data, callback) => {
		const insertIntoRead = query.insertIntoRead;
		connection.query(
			insertIntoRead,
			[data.electric_meter_id, data.user_id, data.read_data, data.month],

			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},

	//getAllElectricMeterData
	getAllElectricMeterInfo: (callback) => {
		const getAllElectricMeterData = query.getAllElectricMeterData;
		connection.query(
			getAllElectricMeterData,

			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	//getUserBill
	getUserBill: (data, callback) => {
		const getBillInfo = query.getBillInfo;

		connection.query(getBillInfo, [data], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	// getUserBill: (data, callback) => {
	// 	const getBillInfo = query.getBillInfo;

	// 	connection.query(getBillInfo, [data], (error, result, fields) => {
	// 		if (error) {
	// 			return callback(error);
	// 		}
	// 		return callback(null, result);
	// 	});
	// },

	getAllUsersBill: (callback) => {
		const getAllBill = query.getAllBill;
		connection.query(getAllBill, (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	getPrevBillInfo: (data, callback) => {
		console.log(`----------${data}`);
		const getPrevElectricMeter = query.getPrevElectricMeter;

		connection.query(getPrevElectricMeter, [data], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	//get user Role
	getUserRole: (data, callback) => {
		const getUserRoleQuery = query.getUserRole;
		connection.query(getUserRoleQuery, [data], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	//InsertBill
	InsertBill: (data, callback) => {
		const insertBill = query.insertBill;
		connection.query(
			insertBill,
			[data.electric_meter_id, data.month, data.range, data.bill_amount],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}

				console.log("******BILI");
				console.log(result);
				console.log("******BILI");

				return callback(null, result);
			}
		);
	},
	//add user info
	addUserInfo: (data, callback) => {
		const insertIntoUsersInfo = query.insertIntoUsersInfo;
		connection.query(
			insertIntoUsersInfo,
			[data.user_id, data.f_name, data.m_name, data.l_name, data.phone],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},

	// add user role
	addUserrole: (data, callback) => {
		const insertIntoUsersrole = query.insertIntoUsersrole;
		connection.query(
			insertIntoUsersrole,
			[1, data.user_id],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},

	// change password
	changepassword: (data, callback) => {
		const updatePassword = query.updatePassword;
		connection.query(
			updatePassword,
			[data.user_password, data.user_id],
			(err, result) => {
				if (err) {
					return callback(err);
				}
				return callback(null, result);
			}
		);
		//query select user using email to get user_id
	},

	//get otp by email
	getOTPByEmail: (data, callback) => {
		const getOTPByEmail = query.getOTPByEmail;

		connection.query(
			getOTPByEmail,
			[data.user_email, data.otp],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	//get user by email
	getUserByEmail: (data, callback) => {
		const getUserByEmail = query.getUserByEmail;

		connection.query(getUserByEmail, [data], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	//update user active status
	updateUserActiveStatus: (data, callback) => {
		const updateUserActiveStatus = query.updateUserActiveStatus;
		console.log(data);
		connection.query(
			updateUserActiveStatus,
			[data.user_active_status, data.user_email],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	// get password by id
	getUserpasswordByid: (data, callback) => {
		const getUserpasswordbyid = query.getUserpasswordbyid;
		console.log(data);
		connection.query(getUserpasswordbyid, [data], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},

	//update OTP
	updateUserOtp: (data, callback) => {
		const updateOtp = query.updateOtp;
		console.log(data);
		connection.query(
			updateOtp,
			[data.otp, data.user_email],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},

	//userById
	userById: (data, callback) => {
		const getUserInfo = query.getUserInfo;

		connection.query(getUserInfo, [data], (err, result) => {
			if (err) {
				return callback(err);
			}
			return callback(null, result[0]);
		});
	},

	// update role

	// add new electric meter
	addElectricMeter: (data, callback) => {
		const insertElectricMeter = query.insertElectricMeter;
		connection.query(
			insertElectricMeter,
			[data.account_number, data.user_id],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},

	//add Electric Meter Address
	addElectricMeterAddress: (data, callback) => {
		const insertElectricMeterAddress = query.insertElectricMeterAddress;
		connection.query(
			insertElectricMeterAddress,
			[
				data.electric_meter_id,
				data.region,
				data.zone,
				data.wereda,
				data.subcity,
				data.kebele,
				data.house_number,
			],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	// update new electric meter
	updateElectricMeter: (data, callback) => {
		const updateElectricMeter = query.updateElectricMeter;
		connection.query(
			updateElectricMeter,
			[data.account_number, data.user_id, data.electric_meter_id],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},

	// update new electric meter Address
	updateElectricMeterAddress: (data, callback) => {
		const updateElectricMeterAddress = query.updateElectricMeterAddress;
		connection.query(
			updateElectricMeterAddress,
			[
				data.region,
				data.zone,
				data.wereda,
				data.subcity,
				data.kebele,
				data.house_number,
				data.electric_meter_address_id,
			],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},

	//delete Electric Meter Address
	// deleteElectricMeterAddressById: (data, callback) => {
	// 	const deleteElectricMeterAddressById = query.deleteElectricMeterAddressById;
	// 	connection.query(
	// 		deleteElectricMeterAddressById,
	// 		[data],
	// 		(error, result, fields) => {
	// 			if (error) {
	// 				return callback(error);
	// 			}
	// 			return callback(null, result);
	// 		}
	// 	);
	// },
	// deleteMeterReadById: (data, callback) => {
	// 	const deleteMeterReadById = query.deleteMeterReadById;
	// 	connection.query(deleteMeterReadById, [data], (error, result, fields) => {
	// 		if (error) {
	// 			return callback(error);
	// 		}
	// 		return callback(null, result);
	// 	});
	// },

	//delete Electric Meter
	// deleteElectricMeterById: (data, callback) => {
	// 	const deleteElectricMeterById = query.deleteElectricMeterById;
	// 	connection.query(
	// 		deleteElectricMeterById,
	// 		[data],
	// 		(error, result, fields) => {
	// 			if (error) {
	// 				return callback(error);
	// 			}
	// 			return callback(null, result);
	// 		}
	// 	);
	// },

	//delete electric and related Data
	deleteAllElectricDataById: (data, callback) => {
		const deleteElectricMeterAddressById = query.deleteElectricMeterAddressById;
		const deleteMeterReadById = query.deleteMeterReadById;
		const deleteElectricMeterById = query.deleteElectricMeterById;

		// Delete electric meter address
		connection.query(
			deleteElectricMeterAddressById,
			[data],
			(error1, result1, fields1) => {
				if (error1) {
					return callback(error1);
				}

				// Delete meter reading
				connection.query(
					deleteMeterReadById,
					[data],
					(error2, result2, fields2) => {
						if (error2) {
							return callback(error2);
						}

						// Delete electric meter
						connection.query(
							deleteElectricMeterById,
							[data],
							(error3, result3, fields3) => {
								if (error3) {
									return callback(error3);
								}

								// If all deletions are successful, return the result of the last query
								return callback(null, result3);
							}
						);
					}
				);
			}
		);
	},

	getUserProf: (data, callback) => {
		const getUserprofile = query.getUserprofile;

		connection.query(getUserprofile, [data], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},

	updateUserRole: (userId, org_role_id, callback) => {
		const updateuserRoleQuery = query.updateuserRoleQuery;
		connection.query(
			updateuserRoleQuery,
			[org_role_id, userId],
			(err, result) => {
				if (err) {
					return callback(err);
				}
				return callback(null);
			}
		);
	},
	getCompanyRole: (newRole, callback) => {
		const getCompanyRoleQuery = query.getCompanyRoleQuery;
		connection.query(getCompanyRoleQuery, [newRole], (err, result) => {
			if (err) {
				return callback(err);
			}
			return callback(null, result);
		});
	},
	// delete user
	// deleteUser: (data, callback) => {
	// 	const deleteUser = query.deleteUser;
	// 	connection.query(deleteUser, [data], (error, result, fields) => {
	// 		if (error) {
	// 			return callback(error);
	// 		}
	// 		return callback(null, result);
	// 	});
	// },

	//I tried to delete user

	deleteBillsByUserId: (user_id, callback) => {
		// Subquery to get electric_meter_id based on user_id
		const subquery = `SELECT electric_meter_id FROM electric_meter WHERE user_id = ?`;

		// Main DELETE query using the subquery
		const deleteBillsQuery = `DELETE FROM bills WHERE electric_meter_id IN (${subquery})`;

		connection.query(
			deleteBillsQuery,
			[user_id, user_id],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	deleteUserMeterRead: (user_id, callback) => {
		const deleteUserMeterReadQuery = "DELETE FROM meter_read WHERE user_id = ?";

		connection.query(
			deleteUserMeterReadQuery,
			[user_id],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	//delete electric meter address by userid
	deleteElectricMeterAddressByUser: (user_id, callback) => {
		const query = `
		  DELETE FROM electric_meter_address
		  WHERE electric_meter_id IN (
			SELECT electric_meter_id
			FROM electric_meter
			WHERE user_id = ?
		  );
		`;

		connection.query(query, [user_id], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	//delete electric meter
	deleteElectricMeterByUser: (user_id, callback) => {
		const deleteQuery = "DELETE FROM electric_meter WHERE user_id = ?";

		connection.query(deleteQuery, [user_id], (error, result) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	//delete profile
	deleteUserProfileByUser: (user_id, callback) => {
		const deleteQuery = "DELETE FROM users_profile WHERE user_id = ?";

		connection.query(deleteQuery, [user_id], (error, result) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	//delete passwrod
	deleteUserPasswordByUser: (user_id, callback) => {
		const deleteQuery = "DELETE FROM users_password WHERE user_id = ?";

		connection.query(deleteQuery, [user_id], (error, result) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	deleteUsersInfoByUser: (user_id, callback) => {
		const deleteQuery = "DELETE FROM users_info WHERE user_id = ?";

		connection.query(deleteQuery, [user_id], (error, result) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},

	deleteUsersRoleByUser: (user_id, callback) => {
		const deleteQuery = "DELETE FROM users_role WHERE user_id = ?";

		connection.query(deleteQuery, [user_id], (error, result) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},

	deleteUsersByUser: (user_id, callback) => {
		const deleteQuery = "DELETE FROM users WHERE user_id = ?";

		connection.query(deleteQuery, [user_id], (error, result) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},

	deleteUserAndRelatedData: (user_id, callback) => {
		userService.deleteBillsByUserId(user_id, (err, results) => {
			if (err) {
				return callback(err);
			}

			userService.deleteUserMeterRead(user_id, (err, results) => {
				if (err) {
					return callback(err);
				}

				userService.deleteElectricMeterAddressByUser(
					user_id,
					(err, results) => {
						if (err) {
							return callback(err);
						}

						userService.deleteElectricMeterByUser(user_id, (err, results) => {
							if (err) {
								return callback(err);
							}

							userService.deleteUserProfileByUser(user_id, (err, results) => {
								if (err) {
									return callback(err);
								}

								userService.deleteUserPasswordByUser(
									user_id,
									(err, results) => {
										if (err) {
											return callback(err);
										}

										userService.deleteUsersInfoByUser(
											user_id,
											(err, results) => {
												if (err) {
													return callback(err);
												}

												userService.deleteUsersRoleByUser(
													user_id,
													(err, results) => {
														if (err) {
															return callback(err);
														}

														userService.deleteUsersByUser(user_id, callback);
													}
												);
											}
										);
									}
								);
							});
						});
					}
				);
			});
		});
	},
	//insertTrasaction
	//service
	// insertTransaction: (data, callback) => {
	// 	const insertTransaction = query.insertTransaction;
	// 	// In the service
	// 	console.log("SQL query:", insertTransaction);

	// 	// Execute the SQL query
	// 	// In the service
	// 	connection.query(
	// 		insertTransaction,
	// 		[data.user_id, data.amount, data.payment_status],
	// 		(error, results) => {
	// 			if (error) {
	// 				console.error("MySQL error:", error);
	// 				return callback(error);
	// 			}
	// 			return callback(null, results);
	// 		}
	// 	);
	// },
	// Service
	insertTransaction: (data, callback) => {
		const insertTransaction = query.insertTransaction;
		// Execute the SQL query
		connection.query(
			insertTransaction,
			[
				data.user_id,
				data.bill_id,
				data.amount,
				data.payment_status,
				data.stripe_token,
			],
			(error, results) => {
				if (error) {
					console.error("MySQL error:", error);
					return callback(error);
				}
				return callback(null, results);
			}
		);
	},
	//notification service
	insertNotification: (user_id, month, message, user_name, callback) => {
		const insertNotification = query.insertNotification;
		connection.query(
			insertNotification,
			[user_id, month, message, user_name],
			(err, result) => {
				if (err) {
					console.log("MySQL insert error:", err);
					return callback(err, null);
				}
				return callback(null, result);
			}
		);
	},
	getNotificationsByUserId: (user_id, callback) => {
		const getNotification = query.getNotification;
		connection.query(getNotification, [user_id], (err, results) => {
			if (err) {
				console.log("MySQL select error:", err);
				return callback(err, null);
			}
			return callback(null, results);
		});
	},
};

export default userService;

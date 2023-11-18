import express from "express";
import auth from "../../auth/auth.js";

import userController from "./users.controler.js";
//import { upload } from '../../config/multer.js';
const usersRouter = express.Router();
// usersRouter.put('/assignrole', userController.assignRole);
usersRouter.get("/users", userController.AllUser);

usersRouter.get("/getuserRole/:id", userController.getUserRole);
usersRouter.post("/insertreaddata", userController.insertReadData);
usersRouter.get("/electricmeters", userController.AllElectricMeters);
usersRouter.get("/meterread", userController.AllMetersRead);
// usersRouter.get('//users/:id', userController.deleteUser);

usersRouter.get("/bills/:user_id", userController.getUserBill);
usersRouter.get("/bills", userController.getAllUsersBill);

usersRouter.post("/createuser", userController.createUser);
usersRouter.post("/confirmotp", userController.confirmOtp);
usersRouter.post("/login", userController.login);
usersRouter.post("/forgetpassword", userController.forgetPassword);
usersRouter.post("/changePassword", userController.changePassword);
usersRouter.get("/", auth, userController.getUserById);
usersRouter.post("/assignrole", userController.updateUserRole);
usersRouter.post("/addelectricmeter", userController.addElectricMeter);
usersRouter.put("/updateElectricMeter", userController.updateElectricMeter);
usersRouter.put(
	"/updateElectricMeterAddress",
	userController.updateElectricMeterAddress
);
usersRouter.delete(
	"/deleteElectricMeter/:id",
	userController.deleteElectricMeter
);
//for userprofile
usersRouter.get("/users/:user_id", userController.getUserProfile);
usersRouter.put("/updateUserRole/:user_id", userController.updateUserRole);

usersRouter.put("/updateByAdmin/:user_id", userController.updateByAdmin);
// usersRouter.put("/deleteuser", userController.deleteUser);
// usersRouter.delete("/deleteuser/:id", userController.deleteUser);
//delete user nw
// usersRouter.delete("/deleteUser/:id", userController.deleteUsersByUser);
usersRouter.delete("/deleteuser/:id", userController.deleteUserAndRelatedData);
//transaction

usersRouter.post("/insertTransaction", userController.insertTransaction);
usersRouter.delete(
	"/deleteelectricdata/:id",
	userController.deleteAllElectricDataById
);
usersRouter.post("/notification", userController.sendNotificationEmail);
//usersRouter.get("/", auth, userController.getUserById);
// usersRouter.post('/createuser', userController.createUser)
// usersRouter.post('/login', userController.login)
// usersRouter.post('/userinfo',auth, userController.getUserById)
// usersRouter.post('/profilepicture', userController.profilepicture)

export default usersRouter;

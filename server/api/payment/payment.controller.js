import stripe from "stripe";
import paymentService from "./payment.service.js";
//Importing bcryptJs module to use password encryption
import bcrypt from "bcryptjs";
//Importing database structure
import { connection } from "../../config/db.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
//import { upload } from '../../config/multer.js';
import dotenv from "dotenv";
dotenv.config();
const paymentController = {
	addPaymentBill: (req, res) => {
		paymentService.addPaymentBill(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res
				.status(200)
				.json({ status: "sucsess", msg: " payment data added successfully" });
		});
	},
	getPayment: (req, res) => {
		paymentService.getPaymentByUserId(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "error fetching db" });
			}
			return res.status(200).json({
				status: "success",
				msg: " readed electric meter data added sucessfully",
			});
		});
	},
	//   createPaymentIntent: (req, res) => {
	//     const { amount, currency } = req.body;
	//     stripe.paymentIntents.create({
	//       amount,
	//       currency,
	//     })
	//       .then((paymentIntent) => {
	//         res.json({ clientSecret: paymentIntent.client_secret });
	//       })
	//       .catch((error) => {
	//         console.error('Error creating payment intent:', error);
	//         res.status(500).json({ error: 'Failed to create payment intent' });
	//       });
	//   },
};

export default paymentController;

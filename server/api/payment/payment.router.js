import express from "express";
import paymentController from "./payment.controller.js";
const paymentRouter = express.Router();

paymentRouter.get("/", (req, res) => {
	res.send("payment");
});

paymentRouter.post("/addpayment", paymentController.addPaymentBill);
paymentRouter.get("/getpayment", paymentController.getPayment);

export default paymentRouter;

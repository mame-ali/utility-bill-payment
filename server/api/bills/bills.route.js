import express from "express";
import billsController from "./bills.controller.js";

const billsRouter = express.Router();

// billsRouter.get("/getbill/:account_number", billsController.getbillByAccount);
billsRouter.get("/getbills/:account_number", billsController.getBillByAccount);
export default billsRouter;

import { connection } from "../../config/db.js";
import query from "../../query/query.js";

const paymentService = {
	//add payment bill

	addPaymentBill: (data, callback) => {
		const insertPaymentBill = query.insertPaymentBill;
		console.log(data);
		connection.query(
			insertPaymentBill,
			[data.payment_reference, data.payment_amount, data.payment_status],

			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	//get payment by user ID
	getPaymentByUserId: (data, callback) => {
		const getPayment = query.getPayment;
		connection.query(getPayment, [data], (error, result, fields) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
};

export default paymentService;

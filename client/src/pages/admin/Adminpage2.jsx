import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../../component/adminLayout/AdminLayout";
import Users from "../users/Users";
import Bill from "../bill/Bill";
import ElectricMeter from "../electric/Electric";

function AdminPage2() {
	return (
		<Routes>
			<Route path="/admin" element={<AdminLayout />}>
				<Route path="/admin" index element={<AdminLayout />} />
				<Route path="/admin/users" element={<Users />} />
				<Route path="/admin/electricmeter" element={<ElectricMeter />} />
				<Route path="/admin/bills" element={<Bill />} />
				{/* Other routes */}
			</Route>
		</Routes>
	);
}

export default AdminPage2;

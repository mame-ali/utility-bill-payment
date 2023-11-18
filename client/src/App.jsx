// Import react
import React from "react";
// Import the Routes and Route components from react-router
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";
import "./App.css";
// Import the custom css file
import "./assets/styles/custom.css";
// import Header from "./component/Header/Header.jsx";
import Home from "./pages/home/Home";

import Footer from "./component/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import ServTwo from "./component/services/ServTwo";
import { Link, Routes, Route } from "react-router-dom";
import ComfTwo from "./pages/forgetpassword/ComfTwo";
import Comfotp2nd from "./pages/forgetpassword/ComfOtp2nd";
import ForgetPassword from "./pages/forgetpassword/Forgetpassword";
import Enterpassword from "./pages/forgetpassword/Enterpassword";
import About from "./pages/about/About";
import History from "./pages/history/History";
// import HeadLogin from "./component/Header/HeadLogin";
//headernew

//services
import Postpaid from "./pages/postpaid/Pospaid";
import Prepaid from "./pages/prepaid/Prepaid";
import BillInformation from "./pages/bill-information/Bill-information";
import GettingElectric from "./pages/getting-electric/GettingElectric";
//after login
import Bill from "./pages/bill/Bill";
import Users from "./pages/users/Users";
import AddElectricMeter from "./pages/add/AddElectricMeter";
import Electric from "./pages/electric/Electric";
import Read from "./pages/read/Read";
import Payment2 from "./pages/payment/Payment2";

// import UpdateRole from "./pages/updateRole/UpdateRole";
import Manageuser from "./pages/updateRole/ManageUser";
import HeaderTwo from "./component/Header/HeaderTwo";
import Faq from "./pages/faq/Faq";
import Fo4 from "./component/fo4/Fo4";
import Payment3 from "./pages/payment/Payment3";
import Transaction from "./pages/transaction/Transaction";
// import AdminMenu from "./component/adminMenu/AdminMenu";
import AdminPage from "./pages/admin/AdminUser";
import Paytm from "./component/Paytm";
import EachBill from "./pages/billForm/EachBill";
import UserBill from "./pages/userBill/UserBill";
import Notification from "./pages/notification/Notification";
import AdminElectric from "./pages/admin/AdminElec";
import AdminUser from "./pages/admin/AdminUser";
import AdminBill from "./pages/admin/AdminBills";
import AdminDash from "./pages/admin/AdminDash";
import AdminAssignRole from "./pages/admin/AdminAssignRole";
// import AdminPage2 from "./pages/admin/Adminpage2";

function App() {
	return (
		<>
			{/* <Header /> */}
			<HeaderTwo />
			{/* <HeadLogin /> */}
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/signup" element={<Register />} />

				<Route path="/login" element={<Login />} />
				<Route path="/forgetpassword" element={<ForgetPassword />} />
				<Route path="/comfirmotpsecond" element={<Comfotp2nd />} />
				<Route path="/comfirmotp" element={<ComfTwo />} />
				<Route path="/enterpassword" element={<Enterpassword />} />
				<Route path="/about" element={<About />} />
				<Route path="/history" element={<History />} />
				<Route path="/faq" element={<Faq />} />

				<Route path="/postpaid" element={<Postpaid />} />
				<Route path="/prepaid" element={<Prepaid />} />
				<Route path="/bill-info" element={<BillInformation />} />
				<Route path="/getting-electric" element={<GettingElectric />} />
				<Route path="/admin/electricmeter" element={<AdminElectric />} />
				<Route path="/admin/users" element={<AdminUser />} />
				<Route path="/admin/bills" element={<AdminBill />} />
				<Route path="/admin/dashboard" element={<AdminDash />} />
				<Route
					path="/admin/addelectricmeter"
					element={
						<>
							<AddElectricMeter />
						</>
					}
				/>

				<Route path="/admin/assignrole" element={<AdminAssignRole />} />
				<Route path="/read" element={<Read />} />
				{/* <Route path="/manageuser" element={<Manageuser />} /> */}
				<Route path="/payment" element={<Payment2 />} />
				<Route path="/payment3" element={<Payment3 />} />
				<Route path="/transaction" element={<Transaction />} />
				{/* <Route path="/admin/admindashboard" element={<AdminPage />} /> */}
				<Route path="/paytm" element={<Paytm />} />
				<Route path="/eachbill" element={<EachBill />} />
				<Route path="/userbill" element={<UserBill />} />
				<Route path="/notification" element={<Notification />} />
				{/* <Route path="/admin" element={<AdminPage2 />} /> */}

				<Route path="/*" element={<Fo4 />} />
				{/* <Route path="/electricmeter" element={<Electric />} />
				<Route path="/users" element={<Users />} />
				<Route path="/bills" element={<Bill />} />
				<Route
					path="/addelectricmeter"
					element={
						<>
							<AddElectricMeter />
						</>
					}
				/>
				<Route path="/read" element={<Read />} />
				<Route path="/paymentoptions" element={<PaymentOptions />} />
				<Route path="/electricbill" element={<YourElectric />} />

				<Route path="/*" element={<Four04 />} /> */}
			</Routes>

			<Footer />
		</>
	);
}

export default App;

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
import HeadLogin from "./component/Header/HeadLogin";
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
function App() {
	return (
		<>
			{/* <Header /> */}
			<HeadLogin />
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

				<Route path="/postpaid" element={<Postpaid />} />
				<Route path="/prepaid" element={<Prepaid />} />
				<Route path="/bill-info" element={<BillInformation />} />
				<Route path="/getting-electric" element={<GettingElectric />} />
				<Route path="/electricmeter" element={<Electric />} />
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
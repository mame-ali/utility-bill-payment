import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// Import the css files
// import { AuthProvider } from "./Contexts/AuthContext.js";
// Import the AuthProvider
// import { AuthProvider } from "./Contexts/AuthContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<UserProvider>
			{/* <AuthProvider> */}
			<App />
			{/* </AuthProvider> */}
		</UserProvider>
	</BrowserRouter>
);

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import React, { useState } from "react";
import SigninPage from "./pages/signin";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		// <Router>
		// 	<Home />
		// </Router>

		<Router>
			{/* <Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} /> */}
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={SigninPage} exact />
			</Switch>
		</Router>
	);
}

export default App;

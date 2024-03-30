import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document
			.querySelector("html")
			.setAttribute("data-theme", localStorage.getItem("theme"));
	}, [theme]);

	return (
		<>
            <Nav theme={theme} setTheme={setTheme} />
            <Outlet />
			<Footer />
		</>
	);
}

export default App;

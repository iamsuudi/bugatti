import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Stat from "./components/Stat";

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
      <Nav theme={ theme } setTheme={setTheme} />
      <Hero />
      <Detail />
      <Features />
      <Stat />
      <Footer />
		</>
	);
}

export default App;

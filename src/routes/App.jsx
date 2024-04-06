import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function App() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    let location = useLocation();

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document
            .querySelector("html")
            .setAttribute("data-theme", localStorage.getItem("theme"));
        console.log(location.pathname);
    }, [theme, location]);

    return (
        <>
            <Nav theme={theme} setTheme={setTheme} location={location} />
            <Outlet />
            <Footer location={location} />
        </>
    );
}

export default App;

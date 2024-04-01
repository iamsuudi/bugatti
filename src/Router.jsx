import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/features',
                    element: <About />,
                },
                {
                    path: '/contact',
                    element: <Contact />,
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    );
}
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "./routes/Home";
import About from "./routes/About";

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
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    );
}
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router
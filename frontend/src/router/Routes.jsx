import { createBrowserRouter } from "react-router-dom";

import LoginPage from '../pages/Login/LoginPage';
import SignUp from "../pages/SignUp/SignUp";
import Homepage from "../pages/Homepage/Homepage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/cadastrarUsuario",
        element: <SignUp />,
    },
    {
        path:"/homepage",
        element: <Homepage />,
    }
])


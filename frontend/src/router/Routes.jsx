import { createBrowserRouter } from "react-router-dom";

import LoginPage from '../pages/Login/LoginPage';
import SignUp from "../pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/cadastrarUsuario",
        element: <SignUp />,
    }
])


import { createBrowserRouter } from "react-router-dom";

import LoginPage from '../pages/Login/LoginPage';
import SignUp from "../pages/SignUp/SignUp";
import Homepage from "../pages/Homepage/Homepage";
import CalculadoraImc from "../pages/Calculadora/CalculadoraImc";
import VerificarHistórico from "../pages/verificarHistórico/verificarHistorico";

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
    },
    {
        path:"/homepage/calculadoraImc",
        element: <CalculadoraImc />,
    },
    {
        path:"/homepage/historico",
        element: <VerificarHistórico />,
    }
])


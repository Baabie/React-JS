import { createBrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
// createBrowserRouter = carrega nossas páginas.
const router = createBrowserRouter([
    { path: "/home", element: <Home/>},
    { path: "/", element: <Login/>}
])

function AppRoutes(){
    return <Route/>
}

export default AppRoutes;
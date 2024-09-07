import { createBrowserRouter } from "react-router-dom";
import Login from "../Registration/Login";
import Signup from "../Registration/Signup";
import Home from "../Home/Home";
import Cart from "../Components/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    },
    {
        path: "/home",
        element: <Home></Home>,
        loader: ()=>fetch('Data.json')
    },
    {
        path: "/cartItem",
        element: <Cart></Cart>
    }

])
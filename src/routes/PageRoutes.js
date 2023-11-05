import {useRoutes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Delivery from "../pages/Delivery/Delivery";
import Contacts from "../pages/Contacts/Contacts";
import SignIn from "../pages/AdminPanel/SignIn";
import MainAdminPanel from "../pages/AdminPanel/MainAdminPanel";
import OrderManagment from "../pages/AdminPanel/OrderManagment";
import ProductForm from "../pages/AdminPanel/ProductForm";
import Product from "../pages/ProductPage/Product";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CartPage from "../pages/CartPage/CartPage"

export default function PageRoutes () {
    return useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '',
                    element: <Home/>
                },
                {
                    path: 'menu',
                    element: <Menu/>
                },
                {
                    path: 'delivery',
                    element: <Delivery/>
                },
                {
                    path: 'contacts',
                    element: <Contacts/>
                },
                {
                    path: 'user',
                    element: <SignIn/>
                },
                {
                    path: 'order',
                    element: <OrderManagment/>
                },
                {
                    path: 'admin',
                    element: <MainAdminPanel/>
                },
                {
                    path: 'productForm',
                    element: <ProductForm/>
                },
                {
                    path: 'product',
                    element: <Product/>
                },
                {
                    path: 'auth/login',
                    element: <Login/>
                },
                {
                    path: 'auth/register',
                    element: <Register/>
                },
                {
                    path: 'cart',
                    element: <CartPage/>,

                }

            ]
        }
    ])
}
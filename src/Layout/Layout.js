import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <>

            <div className="container">
                <Outlet/>
            </div>

            <Footer/>

        </>
    );
};

export default Layout;
import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
           <Navbar></Navbar> 
            <Outlet></Outlet>
           <Footer></Footer>


           <ToastContainer />
        </div>
    );
};

export default RootLayout;
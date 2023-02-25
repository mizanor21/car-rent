import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/SharedPages/Footer/Footer';
import Navbar from '../components/SharedPages/Navbar/Navbar';
import NavbarContact from '../components/SharedPages/Navbar/NavbarContact';

const Layout = () => {
    return (
        <div className='font-serif'>
            <NavbarContact></NavbarContact>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
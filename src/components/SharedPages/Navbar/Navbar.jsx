import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = <>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={''}>Services</Link></li>
        <li><Link to={''}>Blog</Link></li>
        <li><Link to={''}>About</Link></li>
        <li><Link to={''}>Contacts</Link></li>
    </>
    return (
        <section className='bg-black text-white sticky top-0 shadow-xl'>
            <div className="navbar container mx-auto py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-2xl md:text-3xl lg:text-4xl font-bold"><span className='text-yellow-500'>RENT </span><span>CAR</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
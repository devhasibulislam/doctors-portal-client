import React from 'react';
import CustomLink from '../../components/CustomLink/CustomLink';

const Navbar = () => {
    const navItems = <>
        <li><CustomLink to='/home'>Home</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        <li><CustomLink to='/appointment'>Appointment</CustomLink></li>
        <li><CustomLink to='/reviews'>Reviews</CustomLink></li>
        <li><CustomLink to='/contactUs' className='whitespace-nowrap'>Contact Us</CustomLink></li>
        <li><CustomLink to='/login'>Login</CustomLink></li>
    </>
    return (
        <div className='bg-white sticky top-0 z-50 shadow'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <CustomLink to='/' className="text-xl whitespace-nowrap">Doctors Portal</CustomLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
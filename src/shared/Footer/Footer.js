import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-white'>
            <hr />
            <div className="container mx-auto">
                <footer class="footer p-10 text-neutral-content">
                    <div>
                        <span class="footer-title text-black">SERVICES</span>
                        <Link to='/' class="link link-hover text-black">Emergency Checkup</Link>
                        <Link to='/' class="link link-hover text-black">Monthly Checkup</Link>
                        <Link to='/' class="link link-hover text-black">Weekly Checkup</Link>
                        <Link to='/' class="link link-hover text-black">Deep Checkup</Link>
                    </div>
                    <div>
                        <span class="footer-title text-black">ORAL HEALTH</span>
                        <Link to='/' class="link link-hover text-black">Fluoride Treatment</Link>
                        <Link to='/' class="link link-hover text-black">Cavity Filling</Link>
                        <Link to='/' class="link link-hover text-black">Teeth Whitening</Link>
                    </div>
                    <div>
                        <span class="footer-title text-black">OUR ADDRESS</span>
                        <Link to='/' class="link link-hover text-black">New York - 101010 Hudson</Link>
                    </div>
                </footer>
                <hr className='w-1/2 mx-auto' />
                <section class="footer footer-center p-4 text-base-content">
                    <div>
                        <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;
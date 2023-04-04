import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div className='m-8'>
            <footer className="footer p-10 m-8 text-black " style={{
                background:`url(${footer})`,
                backgroundSize:'cover'
            }}>
                <div className='font-xl'>
                    <span className="footer-title text-2xl">Services</span>
                    <Link className="text-xl link link-hover">Branding</Link>
                    <Link className="link text-xl link-hover">Design</Link>
                    <Link className="link text-xl link-hover">Marketing</Link>
                    <Link className="link text-xl link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title text-2xl">Company</span>
                    <Link className="link text-xl link-hover">About us</Link>
                    <Link className="link text-xl link-hover">Contact</Link>
                    <Link className="link text-xl link-hover">Jobs</Link>
                    <Link className="link text-xl link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title text-2xl">Legal</span>
                    <Link className="link text-xl link-hover">Terms of use</Link>
                    <Link className="link text-xl link-hover">Privacy policy</Link>
                    <Link className="link text-xl link-hover">Cookie policy</Link>
                </div>

            </footer>
            <div className='text-center'>
                <h2>Copyright 2022 All Rights Reserved</h2>
            </div>
        </div>
    );
};

export default Footer;
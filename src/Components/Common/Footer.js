import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = (new Date().getFullYear());
    return (
        <footer className="footer-center" >
            <div className="footer p-10 bg-white ">
            <div>
              <span className="footer-title">Services</span>
              <Link to='/' className="link link-hover">Branding</Link>
              <Link to='/' className="link link-hover">Design</Link>
              <Link to='/' className="link link-hover">Marketing</Link>
              <Link to='/' className="link link-hover">Advertisement</Link>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <Link to='/about' className="link link-hover">About us</Link>
              <Link to='/contact' className="link link-hover">Contact</Link>
              <Link to='/service' className="link link-hover">Service</Link>
              <Link to='/showallservices' className="link link-hover">All Service</Link>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <Link to='/' className="link link-hover">Terms of use</Link>
              <Link to='/' className="link link-hover">Privacy policy</Link>
              <Link to='/' className="link link-hover">Cookie policy</Link>
            </div>
            
            </div>
            <p className="my-16">Copyright © {currentYear} - All right reserved by Ranjit Kumar Mandal</p>
          </footer>
    );
};

export default Footer;
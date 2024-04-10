import React from 'react';
import logo from '../logo.svg';

const Footer = () => {
    return ( <footer className="footer">
        <div className="container">
            <div className="footer-top">
            <p className='wow animate__animated animate__slideInLeft'>Политика конфиденциальности</p>
            <img id="my-logo-footer" src={logo} width="40" height="50" alt="Logo"/>
            <ul className='wow animate__animated animate__slideInRight'>
                <li>+38 050-456-56-56</li>
            </ul>
            </div>
        </div>
    </footer> );
}

export default Footer;
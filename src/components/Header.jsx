import React from 'react';
import logo from '../logo.svg';

const Header = () => {
    return(
<header className="header">
    <div className="container">
    <div className="header-top">
        <ul className='wow animate__animated animate__slideInLeft'>
        <li><a href="#news">Что нового</a></li>
        <li><a href="#color">Цвет</a></li>
        <li><a href="#form">Заказать</a></li>
        </ul>
        <img id="my-logo-header" src={logo} width="40" height="50" alt="Logo"/>
        <ul className='wow animate__animated animate__slideInRight'>
        <li>+38 050-456-56-56</li>
        </ul>
    </div>
    </div>
</header>);
}
export default Header;
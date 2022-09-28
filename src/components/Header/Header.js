import React from 'react';
import './Header.css'
import logo from '../../images/new.jpg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <h1>Football Club</h1>
        </nav>
    );
};

export default Header;
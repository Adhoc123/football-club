import React from 'react';
import './Header.css'
import logo from '../../images/football.jpg'

const Header = () => {
    return (
        <div>
            <nav>
                <div className='hello'>
              {/* //</div>  <img src={logo}</> */}
                <img src={logo}></img>
                <h1>Football Club</h1>
                </div>
              
            </nav>
        </div>
    );
};

export default Header;
import React, { useState } from 'react';
import Logo from './Logo';

const Navigation = () => {
    const [ click, setClick ] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="container">
                <Logo />
                <i className="fas-fa-fistdraft"></i>
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

               
                    <ul className={click ? "nav-menu active" : "nav-menu"}>        
                        <li className="nav-item">
                            <a href="/" className="nav-links" onClick={closeMobileMenu}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-links" onClick={closeMobileMenu}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-links" onClick={closeMobileMenu}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skils" className="nav-links" onClick={closeMobileMenu}>Skils</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contacts" className="nav-links" onClick={closeMobileMenu}>Contacts</a>
                        </li>
                    </ul>
                
            </div>
        </nav>
    );
};

export default Navigation;
import React from 'react';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <Logo />
                        </div>
                    </ul>

                    <ul className="navbar__right">
                        <li><a href="www.google.fr">Home</a></li>
                        <li><a href="www.google.fr">About</a></li>
                        <li><a href="www.google.fr">Skills</a></li>
                        <li><a href="www.google.fr">Portfolio</a></li>
                        <li><a href="www.google.fr">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaMobile } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="common">
                <h1 className="mainHeader">Contact</h1>
                    <p className="mainContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa.</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="contact-content">
                    <div className="contact-box">
                        <ul>
                            <li>
                                <i><FaMapMarkerAlt/></i>
                                <span>Montpellier</span>
                            </li>
                            <li>
                                <i><FaMobile /></i>
                                <CopyToClipboard text="0664267886">
                                    <span className="clickInput" onClick={() => {alert('Téléphone copié ! ');}}> 06 64 26 78 86 </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i><FaMailBulk /></i>
                                <CopyToClipboard text="f.andriamahaly@gmail.com">
                                    <span className="clickInput" onClick={ () => {alert('E-mail copié !');}}> f.andriamahaly@gmail.com </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-socialNetwork">
                        <ul>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <h3>Linkedin</h3>
                                <i><FaLinkedin/></i>
                            </a>
                            <a href="http://www.github.com/Fetra01" target="_blank" rel="noopener noreferrer">
                                <h3>Github</h3>
                                <i><FaGithub /></i>
                            </a>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import {FaFacebookF, FaGithub, FaLinkedin, FaPlay} from "react-icons/fa"

const Home = () => {
    const [state] = React.useState({
        title: 'I am Fetra ANDRIAMAHALY',
        text: "i'm Fetra, professionnal web developer with long time experience in this field",
        image:'/media/manOnTable.svg'
    })

    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="home__content">
                            <div className="home__section">
                                <ul className="home__ul">
                                    <li><FaFacebookF className="icon" /></li>
                                    <li><FaGithub  className="icon"/></li>
                                    <li><FaLinkedin className="icon"/></li>
                                </ul>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="home__buttons">
                                    <a href="https://www.google.com" className="btn btn-outline">My Portfolio</a>

                                    &nbsp;&nbsp;&nbsp;

                                    <a href="https://www.google.com" className="btn btn-smart"><FaPlay className="play"/></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="home__img">
                            <img src={state.image} alt="man-on-table"/>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Home;
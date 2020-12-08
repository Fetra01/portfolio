import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {

    const [state] = React.useState([
        {
            id: 1,
            icon: "FaGithub",
            heading:"Web Development",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam omnis sequi optio porro culpa reiciendis et ad placeat odit.",
        },

        {
            id: 2,
            icon: "FaCamera",
            heading:"Photography",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam omnis sequi optio porro culpa reiciendis et ad placeat odit.",
        },

        {
            id: 3,
            icon: "FaCircleNotch",
            heading:"Web Desing",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam omnis sequi optio porro culpa reiciendis et ad placeat odit.",
        },

        {
            id: 4,
            icon: "FaApple",
            heading:"App Development",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam omnis sequi optio porro culpa reiciendis et ad placeat odit.",
        },
        {
            id: 5,
            icon: "FaFileVideo",
            heading:"Video Editing",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam omnis sequi optio porro culpa reiciendis et ad placeat odit.",
        },
        {
            id: 6,
            icon: "FaSearchDollar",
            heading:"SEO Expert",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quam omnis sequi optio porro culpa reiciendis et ad placeat odit.",
        },
    ])

    return (
        <div className="portfolio">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">Portfolio</h1>
                    <p className="mainContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, a?</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="portfolio-content">
                    <div className="row">
                        {state.map(info => (
                            <div className="col-4">
                                <div className="portfolio-box">
                                    <FaGithub className="commonIcons"/>
                                    <div className="portfolio-box-header">
                                        {info.heading}
                                    </div>
                                    <div className="portfolio-box-p">
                                        {info.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
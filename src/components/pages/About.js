import React from 'react';

const About = () => {
    const [header] = React.useState({
        mainHeader: "About Me",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni rem laudantium earum molestias deleniti cum ratione aliquid incidunt sunt."
    })


    const [state] = React.useState([
        {
            id :1,
            title:"Name",
            text:"Fetra ANDRIAMAHALY"
        },
        {
            id: 2,
            title: "Email",
            text: "Example@domain.com"
        },
        {
            id: 3,
            title: "Phone",
            text: "00 00 00 00 00"
        },
        {
            id: 4,
            title:"Linkedin",
            text: "Fetra"
        }
    ]);

    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.mainHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="about-content">
                    <div className="row">
                        <div className="col-6">
                            <div className="about-img">
                                <img src="/media/manOnTable.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about-info">
                                <h1>Hi There</h1>
                                <div className="about-info-p1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ea.
                                </div>
                                <div className="about-info-p2">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic excepturi sint ducimus consectetur commodi praesentium deleniti quasi repellat deserunt assumenda?
                                </div>
                                <div className="about-contacts">
                                    <div className="row">
                                        {state.map(info => (
                                            <div className="col-6">
                                                <strong>{info.title} :</strong>
                                                <p>{info.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
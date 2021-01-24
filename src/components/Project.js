import React from 'react';
import './Project.css';
import But from './Button';


function Project({imgURL , text , link , header}) {
    return (
        <div className="container">
            <div className="Project">
                <img className="image1" src={imgURL} alt="Not yet"/>
                <div className="wrapper">
                    <h2>{header}</h2>
                    <span>{text}</span>
                        <But  className="visitwebsite" text="Visit Website" url="https://www.google.fr"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Project

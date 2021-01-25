import React from 'react'
import Skill from './Skill'
import './Skills.css'
import But from './Button';
function Skills() {
    return (
        <div id="myskills" className="container">
            <h1>My Skills</h1>
            <hr className="hrr"/>
            <div className="line">
                <div className="Skills">
                    <Skill imgURL="html" text="HTML5"/>
                    <Skill imgURL='css3' text="CSS3"/>
                    <Skill imgURL='js' text="JavaScript"/>
                </div>
                <div className="Skills">
                    <Skill imgURL='react' text="React / React Native"/>
                    <Skill imgURL='sass' text="Sass"/>
                    <Skill imgURL='materiel' text="Materiel UI"/>
                    
                </div>
            </div>
            <But  text="Learn More" url="https://www.google.fr"/>
            
        </div>
    )
}

export default Skills

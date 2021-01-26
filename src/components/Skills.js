import React , {useState , useEffect} from 'react'
import ImageSlider from './ImageSlider'
import Skill from './Skill'
import './Skills.css'
import {SliderData} from './SliderData'

function Skills() {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }
          window.addEventListener('resize', handleResize)
             return _ => {
          window.removeEventListener('resize', handleResize)
          
      }
      })
      
    return (
        <div >
            {dimensions.width > 1000 && <div id="myskills" className="container">
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
                <div className="Skills">
                    <Skill imgURL='svgGit' text="GitHub / Git"/>
                </div>
            </div>
            
            
        </div>}
        {dimensions.width <1000 && 
        <div>
            <h1>My Skills</h1>  
            <hr className="hrr"/>  
            <ImageSlider slides={SliderData}/>
        </div>}
      </div>
)
}

export default Skills

import React , {useEffect} from 'react'
import './skill.css'
import Aos  from 'aos'
import 'aos/dist/aos.css'

function Skill({text , imgURL}) {
    useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div data-aos="zoom-in" data-aos-duration="2000"  className="skill">
            <img src={imgURL} alt="Loading ..."/>
            <span>{text}</span>
        </div>
    )
}

export default Skill

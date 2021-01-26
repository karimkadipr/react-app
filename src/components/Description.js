import React , {useEffect} from 'react';
import './Description.css';
import logo from './logo.jpg'
import Aos  from 'aos';
import 'aos/dist/aos.css';

function Description() {
    useEffect(() => {
        Aos.init({});
    }, [])
    return (

        <div  id="homepage" className="description">
            <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="2000">
                <h1>Hi,</h1>
                <h1>I'm Karim,</h1>
                <h1>web developer</h1>
                <h2> - Front end web developer - </h2>
            </div>    
            <img  className="image" data-aos-once="true" data-aos="fade-left" data-aos-duration="2000" src={logo} className="image" alt="Nothing to show"/>
        </div>
        
        

    )
}

export default Description

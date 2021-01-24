import React , {useEffect} from 'react'
import But from './Button'
import './Prj.css'
import logo from './prj.jpg'
import Aos  from 'aos'
import 'aos/dist/aos.css'

function Prj({dataAos}) {
    useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div data-aos={dataAos} 
        data-aos-duration="2000" 
            className="container1">
            <div className="textContent">
                <div className="inside">
                    <h1>Hey Its me Karim</h1>
                    <p className="paragrapgh">Im a web developper</p>
                    <But className="left" text="See Project" url="https://www.google.fr"/>
                </div>
            </div>
            <div className="Image">
                <img src="https://paperpillar.com/assets/images/crisp-works.png"/>
            </div>
        </div>
    )
}

export default Prj

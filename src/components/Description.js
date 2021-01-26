import React , {useEffect ,useState} from 'react';
import './Description.css';
import logo from './logo.jpg'
import Aos  from 'aos';
import 'aos/dist/aos.css';

function Description() {
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

    useEffect(() => {
        Aos.init({});
    }, [])
    return (

        <div  id="homepage" className="description">
            <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000">
                <h1>Hi,</h1>
                <h1>I'm Karim,</h1>
                <h1>A web developer</h1>
                <h2> - Front end web developer - </h2>
            </div>   
            {dimensions.width > 1000 && <img  className="image" data-aos-once="true" data-aos="fade-left" data-aos-duration="2000" src={logo} className="image" alt="Nothing to show"/>}
            
        </div>
        
        

    )
}

export default Description

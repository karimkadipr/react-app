import React , {useEffect} from 'react'
import './skill.css'
import Aos  from 'aos'
import 'aos/dist/aos.css'
import { ReactComponent as SvgHtml } from './html5.svg';
import { ReactComponent as SvgReact } from './undraw_react_y7wq.svg';
import { ReactComponent as SvgSass } from './sass-seeklogo.com.svg';
import { ReactComponent as SvgMateriel } from './material-ui.svg';
import { ReactComponent as SvgJs } from './javascript.svg';
import { ReactComponent as SvgCss } from './css3.svg';


function Skill({text , imgURL}) {
    const svgStyle = {
        width :'60%',
        margin : 'auto',
    }
    
    useEffect(() => {
        Aos.init({ offset: 200 });
    }, [])
    return (
        
            <div  data-aos-once="true" data-aos="zoom-in" data-aos-duration="2000"  className="skill">
                {imgURL === 'html'  &&
                <SvgHtml style={svgStyle}/>
                }
                {imgURL === 'react'  &&
                <SvgReact style={svgStyle}/>
                }
                {imgURL === 'css3'  &&
                <SvgCss style={svgStyle}/>
                }
                {imgURL === 'js'  &&
                <SvgJs style={svgStyle}/>
                }
                {imgURL === 'sass'  &&
                <SvgSass style={svgStyle}/>
                }
                {imgURL === 'materiel'  &&
                <SvgMateriel style={svgStyle}/>
                }
                <h3>{text}</h3>
              
            </div>
            
           
            
    )
}

export default Skill

import React, { useEffect } from 'react'
import './styles/skill.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ReactComponent as SvgHtml } from './html5.svg'
import { ReactComponent as SvgReact } from '../images/react-2.svg'
import { ReactComponent as SvgSass } from './sass-seeklogo.com.svg'
import { ReactComponent as SvgMateriel } from './material-ui.svg'
import { ReactComponent as SvgJs } from './javascript-js-seeklogo.com.svg'
import { ReactComponent as SvgCss } from './css3.svg'
import { ReactComponent as SvgGit } from './github-icon-1.svg'
import { ReactComponent as SvgMongo } from '../images/icons8-mongodb.svg'
import { ReactComponent as SvgNode } from '../images/nodejs-seeklogo.com.svg'
import { ReactComponent as SvgExpress } from '../images/expressjs.svg'
import { ReactComponent as SvgRedux } from '../images/redux-seeklogo.com.svg'
import SvgMongoose from './unnamed.png'
function Skill({ text, imgURL }) {
  const svgStyle = {
    width: 150,
    margin: 'auto',
    padding: ' 0px 20px',
  }

  useEffect(() => {
    Aos.init({ offset: 200 })
  }, [])
  return (
    <div data-aos-once='true' data-aos='zoom-in' data-aos-duration='300'>
      <div className='skill'>
        {imgURL === 'html' && <SvgHtml style={svgStyle} />}
        {imgURL === 'react' && <SvgReact style={svgStyle} />}
        {imgURL === 'css3' && <SvgCss style={svgStyle} />}
        {imgURL === 'js' && <SvgJs style={svgStyle} />}
        {imgURL === 'sass' && <SvgSass style={svgStyle} />}
        {imgURL === 'materiel' && <SvgMateriel style={svgStyle} />}
        {imgURL === 'svgGit' && <SvgGit style={svgStyle} />}
        {imgURL === 'SvgMongo' && <SvgMongo style={svgStyle} />}
        {imgURL === 'SvgNode' && <SvgNode style={svgStyle} />}
        {imgURL === 'SvgExpress' && <SvgExpress style={svgStyle} />}
        {imgURL === 'SvgRedux' && <SvgRedux style={svgStyle} />}
        {imgURL === 'SvgMongoose' && (
          <img src={SvgMongoose} style={{ width: '150', height: 150 }} />
        )}

        <h3>{text}</h3>
      </div>
    </div>
  )
}

export default Skill

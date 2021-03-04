import React, { useEffect, useState } from 'react'
import './styles/skill.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ReactComponent as SvgHtml } from './html5-1.svg'
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
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const svgStyle = {
    width: 150,
    height: 'auto',
    minHeight: 150,
    maxHeight: 150,
    paddingTop: 50,
  }

  useEffect(() => {
    Aos.init({ offset: 200 })
  }, [])

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener('resize', handleResize)
    return (_) => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <div data-aos-once='true' data-aos='zoom-in' data-aos-duration='300'>
      <div className='skill'>
        <div>
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
            <img src={SvgMongoose} style={svgStyle} />
          )}
          <h3 style={{ paddingBottom: '1rem' }}>{text}</h3>
        </div>
      </div>
    </div>
  )
}

export default Skill

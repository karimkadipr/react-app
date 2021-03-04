import React, { useEffect, useState } from 'react'
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
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const svgStyle = {
    width: 150,
    margin: 'auto',
    padding: ' 0px 20px',
  }

  const svgStyleSmall = {
    width: 100,
    margin: 'auto',
    padding: ' 0px 20px',
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
        {imgURL === 'html' && (
          <SvgHtml style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'react' && (
          <SvgReact style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'css3' && (
          <SvgCss style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'js' && (
          <SvgJs style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'sass' && (
          <SvgSass style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'materiel' && (
          <SvgMateriel
            style={dimensions.width > 700 ? svgStyle : svgStyleSmall}
          />
        )}
        {imgURL === 'svgGit' && (
          <SvgGit style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'SvgMongo' && (
          <SvgMongo style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'SvgNode' && (
          <SvgNode style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'SvgExpress' && (
          <SvgExpress
            style={dimensions.width > 700 ? svgStyle : svgStyleSmall}
          />
        )}
        {imgURL === 'SvgRedux' && (
          <SvgRedux style={dimensions.width > 700 ? svgStyle : svgStyleSmall} />
        )}
        {imgURL === 'SvgMongoose' && (
          <img
            src={SvgMongoose}
            style={dimensions.width > 700 ? svgStyle : svgStyleSmall}
          />
        )}

        <h3>{text}</h3>
      </div>
    </div>
  )
}

export default Skill

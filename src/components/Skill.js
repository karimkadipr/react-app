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
    height: 'auto',
    minHeight: 150,
  }

  const svgStyleMedium = {
    width: 100,
    height: 'auto',
    minHeight: 150,
  }
  const svgStyleSmall = {
    width: 75,
    height: 'auto',
    minHeight: 150,
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
          {imgURL === 'html' && (
            <SvgHtml
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'react' && (
            <SvgReact
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'css3' && (
            <SvgCss
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'js' && (
            <SvgJs
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'sass' && (
            <SvgSass
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'materiel' && (
            <SvgMateriel
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'svgGit' && (
            <SvgGit
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'SvgMongo' && (
            <SvgMongo
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'SvgNode' && (
            <SvgNode
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'SvgExpress' && (
            <SvgExpress
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'SvgRedux' && (
            <SvgRedux
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
          {imgURL === 'SvgMongoose' && (
            <img
              src={SvgMongoose}
              style={
                dimensions.width > 700
                  ? svgStyle
                  : dimensions.width > 400
                  ? svgStyleMedium
                  : svgStyleSmall
              }
            />
          )}
        </div>

        <h3>{text}</h3>
      </div>
    </div>
  )
}

export default Skill

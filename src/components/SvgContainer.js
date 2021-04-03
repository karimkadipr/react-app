import React, { useEffect } from 'react'
import './styles/svgContainer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ReactComponent as SvgHtml } from '../images/html5-1.svg'
import { ReactComponent as SvgReact } from '../images/react-2.svg'
import { ReactComponent as SvgSass } from '../images/sass-seeklogo.com.svg'
import { ReactComponent as SvgMateriel } from '../images/material-ui.svg'
import { ReactComponent as SvgJs } from '../images/javascript-js-seeklogo.com.svg'
import { ReactComponent as SvgCss } from '../images/css3.svg'
import { ReactComponent as SvgGit } from '../images/github-icon-1.svg'
import { ReactComponent as SvgMongo } from '../images/icons8-mongodb.svg'
import { ReactComponent as SvgNode } from '../images/nodejs-seeklogo.com.svg'
import { ReactComponent as SvgExpress } from '../images/expressjs.svg'
import { ReactComponent as SvgRedux } from '../images/redux-seeklogo.com.svg'
import { CSSTransition } from 'react-transition-group'

const SvgContainer = ({ SvgType, setTech, tech }) => {
  const svgStyle = {
    width: 60,
    height: 60,
  }

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div>
      {SvgType === 'React JS' && (
        <div
          data-aos-once='true'
          data-aos='zoom-in'
          data-aos-duration='200'
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgReact style={svgStyle} />
        </div>
      )}
      {SvgType === 'JavaScript' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgJs style={svgStyle} />
        </div>
      )}
      {SvgType === 'HTML5' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgHtml style={svgStyle} />
        </div>
      )}
      {SvgType === 'SASS' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgSass style={svgStyle} />
        </div>
      )}
      {SvgType === 'Materiel UI' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgMateriel style={svgStyle} />
        </div>
      )}
      {SvgType === 'CSS3' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgCss style={svgStyle} />
        </div>
      )}
      {SvgType === 'Git / GitHub' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgGit style={svgStyle} />
        </div>
      )}
      {SvgType === 'MongoDB' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgMongo style={svgStyle} />
        </div>
      )}
      {SvgType === 'Node JS' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgNode style={svgStyle} />
        </div>
      )}
      {SvgType === 'Express JS' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgExpress style={svgStyle} />
        </div>
      )}
      {SvgType === 'Redux' && (
        <div
          className='svg_item_project_details'
          onMouseOver={() => setTech(SvgType)}
          onMouseLeave={() => setTech('')}>
          <SvgRedux style={svgStyle} />
        </div>
      )}
    </div>
  )
}

export default SvgContainer

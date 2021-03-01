import React, { useEffect, useState } from 'react'
import { ReactComponent as SvgMongo } from '../images/icons8-mongodb.svg'
import { ReactComponent as SvgReact } from '../images/react-js.svg'
import { ReactComponent as SvgNode } from '../images/nodejs-seeklogo.com.svg'
import { ReactComponent as SvgExpress } from '../images/expressjs.svg'
import { Link } from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Aos from 'aos'

import './styles/Mern.css'

function Mern() {
  const [text, setText] = useState('')
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
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

  useEffect(() => {
    Aos.init({})
  }, [])

  const svgStyle = {
    height: 300,
    width: 300,
  }

  /*   const MongoOnMouseover = () => {
    setText('MongoDB')
  }
  const MongoOnMouseout = () => {
    setText('M')
  } */

  return (
    <>
      {dimensions.width > 1000 && (
        <div className='Mern_container'>
          <h1 id='mern_stack'>Full Stack Developer</h1>
          <div className='svg_container'>
            <div>
              <div
                /*   onMouseEnter={MongoOnMouseover}
                onMouseLeave={MongoOnMouseout} */
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'>
                <SvgMongo style={svgStyle} />
                <span>M</span>
              </div>
            </div>
            <div>
              <div
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-delay='800'>
                <SvgExpress style={svgStyle} />
                <span>E</span>
              </div>
            </div>
            <div>
              <div
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-delay='1600'>
                <SvgReact style={svgStyle} />
                <span>R</span>
              </div>
            </div>
            <div>
              <div
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-delay='2400'>
                <SvgNode style={svgStyle} />
                <span>N</span>
              </div>
            </div>
          </div>
          <div className='animation' style={{ marginTop: 50 }}>
            <Link
              id='animation_arrow'
              smooth={true}
              to='h1_myskills'
              offset={-50}>
              <p style={{ color: 'black', fontSize: '30px' }}>My skills</p>
              <ExpandMoreIcon fontSize='large' style={{ color: 'black' }} />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Mern

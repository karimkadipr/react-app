import React, { useEffect, useState, useReducer } from 'react'
import { ReactComponent as SvgMongo } from '../images/icons8-mongodb.svg'
import { ReactComponent as SvgReact } from '../images/react-js.svg'
import { ReactComponent as SvgNode } from '../images/nodejs-seeklogo.com.svg'
import { ReactComponent as SvgExpress } from '../images/expressjs.svg'
import { Link } from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Aos from 'aos'

import './styles/Mern.css'
import { CSSTransition } from 'react-transition-group'

const initialState = {
  express: false,
  mongodb: false,
  nodejs: false,
  reactjs: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'express':
      return { express: !state.express }
    case 'reactjs':
      return { reactjs: !state.reactjs }
    case 'nodejs':
      return { nodejs: !state.nodejs }
    case 'mongodb':
      return { mongodb: !state.mongodb }

    default:
      throw new Error('Unexpected action')
  }
}

function Mern() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [style, setStyle] = useState(false)
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
    width: dimensions.width > 1600 ? 300 : dimensions.width > 1300 ? 250 : 200,
    height: dimensions.width > 1600 ? 300 : dimensions.width > 1300 ? 250 : 200,
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
                onMouseEnter={() => dispatch({ type: 'mongodb' })}
                onMouseLeave={() => dispatch({ type: 'mongodb' })}
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'>
                <SvgMongo style={svgStyle} />
                <CSSTransition
                  unmountOnExit
                  in={state.mongodb}
                  classNames='span-animation'
                  timeout={300}>
                  <span>MongoDB</span>
                </CSSTransition>
                <CSSTransition
                  unmountOnExit
                  in={!state.mongodb}
                  classNames='span-animation'
                  timeout={300}>
                  <span>M</span>
                </CSSTransition>
              </div>
            </div>
            <div>
              <div
                onMouseEnter={() => dispatch({ type: 'express' })}
                onMouseLeave={() => dispatch({ type: 'express' })}
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-delay='800'>
                <SvgExpress style={svgStyle} />
                <CSSTransition
                  unmountOnExit
                  in={state.express}
                  classNames='span-animation'
                  timeout={300}>
                  <span>Express JS</span>
                </CSSTransition>
                <CSSTransition
                  unmountOnExit
                  in={!state.express}
                  classNames='span-animation'
                  timeout={300}>
                  <span>E</span>
                </CSSTransition>
              </div>
            </div>
            <div>
              <div
                onMouseEnter={() => dispatch({ type: 'reactjs' })}
                onMouseLeave={() => dispatch({ type: 'reactjs' })}
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-delay='1600'>
                <SvgReact style={svgStyle} />
                <CSSTransition
                  unmountOnExit
                  in={state.reactjs}
                  classNames='span-animation'
                  timeout={300}>
                  <span>React JS</span>
                </CSSTransition>
                <CSSTransition
                  unmountOnExit
                  in={!state.reactjs}
                  classNames='span-animation'
                  timeout={300}>
                  <span>R</span>
                </CSSTransition>
              </div>
            </div>
            <div>
              <div
                onMouseEnter={() => dispatch({ type: 'nodejs' })}
                onMouseLeave={() => dispatch({ type: 'nodejs' })}
                className='svgItem'
                data-aos-once='true'
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-delay='2400'>
                <SvgNode style={svgStyle} />

                <CSSTransition
                  unmountOnExit
                  in={state.nodejs}
                  classNames='span-animation'
                  timeout={300}>
                  <span>Node JS</span>
                </CSSTransition>
                <CSSTransition
                  unmountOnExit
                  in={!state.nodejs}
                  classNames='span-animation'
                  timeout={300}>
                  <span>N</span>
                </CSSTransition>
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

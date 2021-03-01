import React, { useEffect, useState } from 'react'
import './styles/Description.css'
import logo from './logo.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ReactComponent as SvgLogo } from './undraw_portfolio_website_lidw.svg'

function Description() {
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
  return (
    <div className='description'>
      <div id='homepage' className='description_line'>
        <div data-aos-once='true' data-aos='zoom-in' data-aos-duration='1000'>
          <h1>Hi,</h1>
          <h1>I'm Karim,</h1>
          <h1>A web developer</h1>
          <h2> - Full Stack web developer - </h2>
        </div>
        {dimensions.width > 1000 && (
          <SvgLogo
            className='image'
            data-aos-once='true'
            data-aos='fade-left'
            data-aos-duration='2000'
            src={logo}
            className='image'
            alt='Nothing to show'
          />
        )}
      </div>
      {dimensions.width > 1000 && (
        <div className='animation' style={{ marginTop: 150 }}>
          <Link id='animation_arrow' smooth={true} to='mern_stack' offset={-30}>
            <p style={{ color: 'white', fontSize: '30px' }}>Click to scroll</p>
            <ExpandMoreIcon fontSize='large' style={{ color: 'white' }} />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Description

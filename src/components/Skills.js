import React, { useState, useEffect } from 'react'
import ImageSlider from './ImageSlider'
import Skill from './Skill'
import { Link } from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { SliderData } from './SliderData'
import './styles/Skills.css'

function Skills() {
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

  return (
    <div>
      {dimensions.width > 1000 && (
        <div id='myskills' className='container'>
          {/* <div class='title_skill'>My Skills</div> */}
          <div className='h1_myskills'>
            <h1>My Skills</h1>
          </div>
          <div className='double_arrows'>
            <div className='animation'>
              <Link
                id='animation_arrow'
                smooth={true}
                to='h1_frontend'
                offset={-70}>
                <p style={{ color: 'white', fontSize: '30px' }}>Front end</p>
                <ExpandMoreIcon fontSize='large' style={{ color: 'white' }} />
              </Link>
            </div>
            <div className='animation'>
              <Link
                smooth={true}
                offset={-70}
                to='h1_backend'
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  minWidth: 300,
                }}>
                <p style={{ color: 'white', fontSize: '30px' }}>Back End</p>
                <ExpandMoreIcon fontSize='large' style={{ color: 'white' }} />
              </Link>
            </div>
            <div className='animation'>
              <Link
                smooth={true}
                offset={-70}
                to='h1_tech'
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  minWidth: 300,
                }}>
                <p style={{ color: 'white', fontSize: '30px' }}>
                  Other Technologies
                </p>
                <ExpandMoreIcon fontSize='large' style={{ color: 'white' }} />
              </Link>
            </div>
          </div>
          <div className='line'>
            <h1 id='h1_frontend'>Front End</h1>
            <hr className='hrr' />
            <div className='Skills' style={{ marginTop: 70 }}>
              <Skill imgURL='html' text='HTML5' />
              <Skill imgURL='css3' text='CSS3' />
              <Skill imgURL='js' text='JavaScript' />
              <Skill imgURL='react' text='React JS' />
            </div>
            <div className='Skills' style={{ width: '45%', marginBottom: 120 }}>
              <Skill imgURL='SvgRedux' text='Redux' />
              <Skill imgURL='sass' text='Sass' />
              <Skill imgURL='materiel' text='Materiel UI' />
            </div>
            <div className='double_arrows_second'>
              <div className='animation'>
                <Link smooth={true} offset={-70} to='h1_backend'>
                  <p style={{ color: 'black', fontSize: '30px' }}>Back End</p>
                  <ExpandMoreIcon fontSize='large' style={{ color: 'black' }} />
                </Link>
              </div>
              <div className='animation'>
                <Link smooth={true} offset={-70} to='h1_tech'>
                  <p style={{ color: 'black', fontSize: '30px' }}>
                    Other Technologies
                  </p>
                  <ExpandMoreIcon fontSize='large' style={{ color: 'black' }} />
                </Link>
              </div>
            </div>
          </div>
          <div className='line'>
            <h1 id='h1_backend' className='spacing'>
              Back End
              <hr className='hrr' />
            </h1>
            <div className='Skills' style={{ marginTop: 150 }}>
              <Skill imgURL='SvgNode' text='Node JS' />
              <Skill imgURL='SvgMongo' text='Mongo DB' />
              <Skill imgURL='SvgExpress' text='Express JS' />
              <Skill
                imgURL='SvgMongoose'
                text='Mongoose'
                style={{ width: 100 }}
              />
            </div>
            <div className='double_arrows_second' style={{ marginTop: 320 }}>
              <div className='animation'>
                <Link smooth={true} offset={-70} to='h1_tech'>
                  <p style={{ color: 'black', fontSize: '30px' }}>
                    Other Technologies
                  </p>
                  <ExpandMoreIcon fontSize='large' style={{ color: 'black' }} />
                </Link>
              </div>
              <div className='animation_down_to_up'>
                <Link smooth={true} offset={-70} to='h1_frontend'>
                  <p style={{ color: 'black', fontSize: '30px' }}>Front End</p>
                  <ExpandLessIcon fontSize='large' style={{ color: 'black' }} />
                </Link>
              </div>
            </div>
          </div>
          <div className='line'>
            <h1 id='h1_tech' className='spacing'>
              Other Technologies{' '}
            </h1>
            <div className='Skills' style={{ marginTop: 150 }}>
              <Skill imgURL='svgGit' text='Git / GitHub' />
            </div>
            <div className='double_arrows_second' style={{ marginTop: 200 }}>
              <div className='animation_down_to_up'>
                <Link smooth={true} offset={-70} to='h1_frontend'>
                  <p style={{ color: 'black', fontSize: '30px' }}>Front End</p>
                  <ExpandLessIcon fontSize='large' style={{ color: 'black' }} />
                </Link>
              </div>
              <div className='animation_down_to_up'>
                <Link smooth={true} offset={-70} to='h1_backend'>
                  <p style={{ color: 'black', fontSize: '30px' }}>Back End</p>
                  <ExpandLessIcon fontSize='large' style={{ color: 'black' }} />
                </Link>
              </div>
            </div>
            <div class='one_arrow'>
              <div className='animation'>
                <Link smooth={true} offset={-70} to='portfolio'>
                  <p style={{ color: 'black', fontSize: '30px' }}>
                    My Projects
                  </p>
                  <ExpandMoreIcon fontSize='large' style={{ color: 'black' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {dimensions.width < 1000 && (
        <div>
          <h1 id='h1_slider'> My Skills</h1>
          <hr className='hrr' />
          <ImageSlider slides={SliderData} />
        </div>
      )}
    </div>
  )
}

export default Skills

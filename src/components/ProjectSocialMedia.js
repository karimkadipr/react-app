import React, { useEffect, useState } from 'react'
import './styles/projectDetails.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'swiper/swiper-bundle.css'
import { Link } from 'react-router-dom'
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

const svgStyle = {
  width: 60,
  height: 60,
}

const ProjectSocialMedia = () => {
  const [tech, setTech] = useState('Hover an icon')
  useEffect(() => {
    Aos.init()
  }, [])

  let arrFunc = [
    'Secured authentication/authorization system.',
    'Profile customization with profile and cover pictures',
    'Add new posts',
    'Delete own posts',
    'Add comments and likes',
    'Delete own comments and likes',
    'Follow/Unfollow an account',
    'Home feed with posts of followed accounts',
    'Profile page with feed containing all my posts',
    'Discover page to find new accounts to connect with',
    'Search functionality to find a specific user',
    'post details page with all the comments',
    'Dark mode functionality',
  ]
  console.log(tech.replace(/\//g, '').replace(/\s+/g, ''))
  return (
    <div className='project_details_container'>
      <div
        data-aos-once='true'
        data-aos='slide-right'
        data-aos-duration='1000'
        style={{
          flex: '1 1 50%',
        }}>
        <div
          className={tech.replace(/\//g, '').replace(/\s+/g, '')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 1s',
            height: '96.65vh',
            boxShadow:
              'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
          }}>
          <div className='website_images_container'>
            <img
              style={{ border: '5px solid' }}
              src='/images/CaptureTwitter.png'
              data-aos-once='true'
              data-aos='slide-right'
              data-aos-duration='1000'
              data-aos-delay='1000'
            />
          </div>
          {/*  <div
            data-aos-once='true'
            data-aos='zoom-in-up'
            data-aos-duration='1000'
            data-aos-delay='2000'
            className='mobile_version_container'>
            <img src='/images/Untitled.png' />
          </div> */}
        </div>
      </div>
      <div
        className='project_details_right'
        data-aos-once='true'
        data-aos='slide-left'
        data-aos-duration='1000'>
        <h1>Description</h1>
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Welcome to my twitter clone built with the MERN Stack with all the
            basic functionalities of a social media network like posting, adding
            comments and liking posts, profile pages and home page with feed
            containing all posts from followed users:
          </p>
          <ul>
            {arrFunc.map((item, index) => (
              <li
                style={{ fontSize: '0.85rem' }}
                data-aos-once='true'
                data-aos='slide-right'
                data-aos-duration='500'
                data-aos-delay={`${index * 200}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h1 style={{ paddingTop: '1rem' }}>Technologies used</h1>
        <div className='svg_container_project_details'>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='700'
              onMouseOver={() => setTech('JavaScript')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgJs style={svgStyle} />
            </div>
          </div>

          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='900'
              className='svg_item_project_details'
              onMouseOver={() => setTech('React JS')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgReact style={svgStyle} />
            </div>
          </div>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='1100'
              className='svg_item_project_details'
              onMouseOver={() => setTech('Redux')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgRedux style={svgStyle} />
            </div>
          </div>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='1300'
              className='svg_item_project_details'
              onMouseOver={() => setTech('Node JS')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgNode style={svgStyle} />
            </div>
          </div>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='1500'
              className='svg_item_project_details'
              onMouseOver={() => setTech('Express JS')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgExpress style={svgStyle} />
            </div>
          </div>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='1700'
              className='svg_item_project_details'
              onMouseOver={() => setTech('Mongo DB')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgMongo style={svgStyle} />
            </div>
          </div>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='1900'
              className='svg_item_project_details'
              onMouseOver={() => setTech('Git / GitHub')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgGit style={svgStyle} />
            </div>
          </div>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='2100'
              className='svg_item_project_details'
              onMouseOver={() => setTech('Materiel UI')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgMateriel style={svgStyle} />
            </div>
          </div>
          <div className='svg_item_project_details'>
            <div
              data-aos-once='true'
              data-aos='zoom-in'
              data-aos-duration='200'
              data-aos-delay='2300'
              className='svg_item_project_details'
              onMouseOver={() => setTech('SASS')}
              onMouseLeave={() => setTech('Hover an icon')}>
              <SvgSass style={svgStyle} />
            </div>
          </div>
        </div>

        {/*         <CSSTransition
          in={tech !== 'Hover an icon'}
          timeout={{ enter: 1000, exit: 0 }}
          classNames='svg-name'>
          <p
            className={tech.replace(/\//g, '').replace(/\s+/g, '')}
            style={{ marginBottom: '1rem' }}>
            {tech}
          </p>
        </CSSTransition> */}

        {/* buttons */}
        <div style={{ marginTop: '1rem' }}>
          <a
            className='show_more_less_button'
            target='_blank'
            rel='noopener noreferrer'
            to='https://github.com/karimkadipr/socialMedia'>
            GitHub
          </a>
          <a
            className='show_more_less_button'
            target='_blank'
            rel='noopener noreferrer'
            to='https://karim-social-media.herokuapp.com/'>
            Website preview
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectSocialMedia

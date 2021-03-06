import React, { useState, useEffect } from 'react'
import { SliderData } from './SliderData'
import './styles/ImageSlider.css'
import Skill from './Skill'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'

const ImageSlider = ({ slides }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
    })
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
    <>
      {/*       <section className='slider'>
        <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
        <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}>
              {index === current && (
                <div className='imageContainer'>
                  <Skill
                    imgURL={slides[index].image}
                    text={slides[index].text}
                  />
                  <Skill
                    imgURL={slides[(index + 1) % length].image}
                    text={slides[(index + 1) % 7].text}
                  />
                  {dimensions.width > 800 && (
                    <Skill
                      imgURL={slides[(index + 2) % length].image}
                      text={slides[(index + 2) % 7].text}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}
      </section> */}

      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {SliderData.map((slide) => {
            return (
              <div key={slide.image} className='swiper-slide'>
                <Skill imgURL={slide.image} text={slide.text} />
              </div>
            )
          })}
        </div>

        <div className='swiper-pagination'></div>
        <div className='swiper-button-prev'>
          <ArrowLeftIcon style={{ height: 40, width: 'auto' }} />
        </div>
        <div className='swiper-button-next'>
          <ArrowRightIcon style={{ height: 40, width: 'auto' }} />
        </div>
      </div>
    </>
  )
}

export default ImageSlider

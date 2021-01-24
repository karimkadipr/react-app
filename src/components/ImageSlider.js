import React, { useState } from 'react';
import { SliderData } from './SliderData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './ImageSlider.css';
import Skill from './Skill'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
      <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="imageContainer">
                <img src={slides[index].image}  className='image' alt='travel image' />
                <img src={slides[(index+1)%5].image}  className='image' alt='travel image' />
                <img src={slides[(index+2)%5].image}  className='image' alt='travel image' />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

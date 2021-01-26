import React, { useState , useEffect} from 'react';
import { SliderData } from './SliderData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './ImageSlider.css';
import Skill from './Skill'

const ImageSlider = ({ slides }) => {

  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
      window.addEventListener('resize', handleResize)
         return _ => {
      window.removeEventListener('resize', handleResize)
      
  }
  })

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
                <Skill imgURL={slides[index].image} text={slides[index].text}/>
                <Skill imgURL={slides[(index+1)%6].image} text={slides[(index+1)%6].text}/>
                {dimensions.width > 800 && <Skill imgURL={slides[(index+2)%6].image} text={slides[(index+2)%6].text}/>}
                
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

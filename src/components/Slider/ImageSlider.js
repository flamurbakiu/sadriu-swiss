import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LazyLoad from 'react-lazyload';

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
      console.log('EFFECT');
    }, 7000);

    return () => clearTimeout(myTimeout);
  });

  return (
    <div className='slider'>
      <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
      <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />

      {images.map((image, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <LazyLoad height={200}>
              <img src={image} alt='img' className='image' />
            </LazyLoad>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;

import React from 'react';
import Slider from 'react-slick';

import slider1 from '../../resource/images/slider1.jpg'
import slider2 from '../../resource/images/slider2.jpg'
import slider3 from '../../resource/images/slider3.jpg'

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true
  }
  
  return (
    <div 
      className="carrousel_wrapper"
      style={{
        height:`${window.innerHeight}px`,
        overflow:'hidden'
      }}
      >
        <Slider {...settings}>
        <div>
          <div 
            className="carrousel_image"
            style={{
              background: `url(${slider1})`,
              height:`${window.innerHeight}px`
            }}
            >
            </div>
          </div>
          <div>
            <div 
              className="carrousel_image"
              style={{
                background: `url(${slider2})`,
                height:`${window.innerHeight}px`
              }}
              >
            </div>
            </div>
          <div>
            <div 
              className="carrousel_image"
              style={{
                background: `url(${slider3})`,
                height:`${window.innerHeight}px`
              }}
              >
            </div>
          </div>
        </Slider>
    </div>
  );
}

export default Carousel;

import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
  return (
    <div style={{position: 'relative'}}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          Arina Grande
        </div>
      </div>
    </div>
  );
}

export default Featured;

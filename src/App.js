import React from 'react';

import { Element } from 'react-scroll';
 
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="Event">
        <Featured />
      </Element>
      <Element name="venue">
        <VenueNfo />
      </Element>
      <Element name="highlight">
        <Highlights />
      </Element>
      <Element name="price">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;

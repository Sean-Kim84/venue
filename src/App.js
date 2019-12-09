import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueNfo />
      <Highlights />
    </div>
  );
}

export default App;

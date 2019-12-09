import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueNfo />
    </div>
  );
}

export default App;

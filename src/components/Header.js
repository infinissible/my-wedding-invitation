import React from 'react';
import Main from './Main';
import Gallery from './Gallery';
import Contact from './Contact';
import Map from './Map';

function Header() {
  return (
    <header>
      <Main />
      <Gallery />
      <Contact />
      <Map />
    </header>
  );
}

export default Header;

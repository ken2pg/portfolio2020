import React, { useEffect, useState } from 'react';
import About from './About';
import Skills from './Skills';
import Top from './Top';
import Works from './Works';

const App = () => {
  return (
    <>
      <Top />
      <About />
      <Skills />
      <Works />
    </>
  );
};

export default App;

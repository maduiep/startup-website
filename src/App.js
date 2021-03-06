import React from 'react'
import './sass/main.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Showcase from './components/Showcase'
import Blank from './components/Blank'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Showcase />
      <Blank />
      <Portfolio />
    </>
  );
}

export default App;

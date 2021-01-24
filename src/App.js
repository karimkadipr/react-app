import React from 'react';
import './App.css';
import Description from './components/Description';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer'
import EmailForm from './components/EmailForm'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Prj from './components/Prj'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      {/* Skiils */}
        <Skills />
      
      {/* Porftilio */} 
      <Portfolio /> 
       {/* Project */}
       {/* Email me */} 
       <EmailForm />
       
      
      <Footer />
      
      
    </div>
  );
}

export default App;

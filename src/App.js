import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import Slide from './components/slide/slide';
import './App.css'
import SlideControls from './components/slideControl.js/slideControls';

const API_URL = 'https://jsonplaceholder.typicode.com/photos';

function App() {
  const [slides,setSlides]=useState([])
  const [currentSlide,setCurrentSlide]=useState(0)

  useEffect(()=>{
    axios.get(API_URL)
    .then(response => {
      setSlides( response.data );
    })
    .catch(error => {
      console.error('Error fetching slides:', error);
    });
  },[])

  const handleNext = () => {  
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide+1)
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide-1)
    }
  };

  const handleRestart = () => {
    setCurrentSlide(0)
  };
  const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide === slides.length - 1;
  return (
    <div className='app'>
    {slides.length > 0 && (
      <div className='content'>
        <Slide
        details={slides[currentSlide]}
          slideNumber={currentSlide + 1}
        />
        <SlideControls
          isFirstSlide={isFirstSlide}
          isLastSlide={isLastSlide}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onRestart={handleRestart}
        />
      </div>
    )}
  </div>
  );
}

export default App;

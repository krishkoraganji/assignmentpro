import React from 'react';
import './slideControl.css'

const SlideControls=(props)=> {
    const { isFirstSlide, isLastSlide, onNext, onPrevious, onRestart } = props;
    return (
      <div className='buttons'>
        <button disabled={isFirstSlide} onClick={onPrevious}>Previous</button>
        <button disabled={isLastSlide} onClick={onNext}>Next</button>
        <button onClick={onRestart}>Restart</button>
      </div>
    );
  }

export default SlideControls;

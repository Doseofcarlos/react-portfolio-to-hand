import React from 'react';
import '../App.css';
import './HeroSection.css';
import './pages/Contact'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Front End Web Developer</h1>
      <p>Carlos Ordonez</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;

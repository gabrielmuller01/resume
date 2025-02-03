import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CustomCarousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="carousel-container">
        <CustomCarousel />
      </div>
    </div>
  );
}

export default App;
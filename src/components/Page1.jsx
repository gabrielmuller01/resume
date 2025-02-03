import React from 'react';
import yo from '../assets/yo.jpg';
import './componentsStyle/Page1.css';

function Page1() {
  return (
    <div className="page1">
      <img src={yo} alt="Sua Foto" className="profile-pic" />
      <h1 class="main-name">Gabriel Muller Polidoro</h1>
      <h2 class="subtitle">Developer</h2>
    </div>
  );
}

export default Page1;
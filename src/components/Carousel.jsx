import React from 'react';
import { Carousel } from 'react-bootstrap';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import './componentsStyle/Carousel.css'; // Importa o novo arquivo CSS

function CustomCarousel() {
  return (
    <Carousel interval={null}> {/* Define interval para 0 para desativar o slide automático */}
      <Carousel.Item>
        <Page1 />
      </Carousel.Item>
      <Carousel.Item>
        <Page2 />
      </Carousel.Item>
      <Carousel.Item>
        <Page3 />
      </Carousel.Item>
      <Carousel.Item>
        <Page4 />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
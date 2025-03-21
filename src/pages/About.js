import React from 'react';
import { event } from '../analytics';

const About = () => {
  const handleLinkClick = () => {
    // Enviar evento a Google Analytics cuando se hace clic en el enlace
    event('About', 'Link Click', 'Learn More');
  };

  return (
    <div>
      <h1>Acerca de Nosotros</h1>
      <p>Esta es una página de ejemplo para demostrar el seguimiento de Google Analytics 4.</p>
      <a 
        href="https://reactjs.org" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >
        Aprende más sobre React
      </a>
    </div>
  );
};

export default About;
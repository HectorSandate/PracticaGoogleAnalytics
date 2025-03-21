import React from 'react';
import { event } from '../analytics';

const Home = () => {
  const handleButtonClick = () => {
    // Enviar evento a Google Analytics cuando se hace clic en el botón
    event('Home', 'Button Click', 'Welcome Button');
    alert('¡Botón clickeado!');
  };

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a nuestra aplicación de ejemplo con Google Analytics 4.</p>
      <button onClick={handleButtonClick}>
        Haz clic aquí
      </button>
    </div>
  );
};

export default Home;
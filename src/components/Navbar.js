import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-around',
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      marginBottom: '2rem'
    }}>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
};

export default Navbar;
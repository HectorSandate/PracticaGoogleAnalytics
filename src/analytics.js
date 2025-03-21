import ReactGA from 'react-ga4';

// ID de medición de Google Analytics 4
const MEASUREMENT_ID = 'G-9Y28DGBJSS';

// Función para inicializar GA
const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
}

// Función para registrar una vista de página
const pageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
}

// Función para registrar un evento
const event = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
}

export { initGA, pageView, event };
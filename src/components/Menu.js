import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
const Menu = () => {
  return (
    <nav className="rockstar-menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de Rockstar</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/posts">Juegos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

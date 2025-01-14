import React from 'react';
import './Header.css'; // Asegúrate de agregar el archivo CSS

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Rockstar Games</h1>
        <p className="header-tagline">Explora mundos, domina historias</p>
      </div>
    </header>
  );
};

export default Header;
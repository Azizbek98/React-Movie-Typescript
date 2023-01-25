import React from 'react';
import logo from '../../assets/logo.svg';
import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className="navigation-container container">
      <img src={logo} alt="logo" />
      <button className="navigation-btn">+ Add Movie</button>
    </nav>
  );
};

export default NavBar;

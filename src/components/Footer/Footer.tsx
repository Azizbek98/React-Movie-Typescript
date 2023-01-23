import React from 'react';
import logo from '../../assets/logo.svg';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container container">
      <img src={logo} alt="logo" />
    </footer>
  );
};

export default Footer;

import React from 'react';
import NavBar from '../../common/NavBar/NavBar';
import SearchBar from '../../common/SearchBar/SearchBar';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <NavBar />
      <SearchBar />
    </header>
  );
};

export default Header;

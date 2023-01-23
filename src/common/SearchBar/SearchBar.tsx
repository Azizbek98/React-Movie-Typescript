import React from 'react';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="search-container container">
      <h1 className="search-title">FIND YOUR MOVIE</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="search-field"
          type="text"
          placeholder="What do you want to watch?"
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

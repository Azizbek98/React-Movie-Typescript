import React from 'react';
import PropTypes from 'prop-types';
import './FilterPanel.scss';

interface IGenresProp {
  filterMenu: string[];
  genreFilter(firstArgument: string): void;
}

const FilterPanel: React.FC<IGenresProp> = ({
  filterMenu,
  genreFilter,
}: IGenresProp) => {
  const sortedMenu = [filterMenu[0], ...filterMenu.slice(1).sort()];

  return (
    <div className="filter-panel">
      <div className="filter-panel__genre">
        {sortedMenu.map((genre) => {
          return (
            <button
              className="filter-panel__btn"
              type="button"
              onClick={() => genreFilter(genre)}
              key={genre}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div className="filter-panel__sort">
        <label htmlFor="sortBy">Sort by</label>
        <select id="sortBy">
          <option selected>release date</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  filterMenu: PropTypes.array.isRequired,
  genreFilter: PropTypes.func.isRequired,
};

export default FilterPanel;

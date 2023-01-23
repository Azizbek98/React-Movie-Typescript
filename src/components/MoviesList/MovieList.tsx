import React from 'react';
import EmptyList from '../../common/EmptyList/EmptyList';
import FilterPanel from '../../common/FilterPanel/FilterPanel';
import MovieCard from '../../common/MovieCard/MovieCard';
import { MovieType, Movies, Genres } from '../../utils/data';
import './MovieList.scss';

const allGenres = [...Genres];

const MovieList: React.FC = () => {
  const [movieCards, setMovieCards] = React.useState<MovieType[]>([...Movies]);
  const [filterMenu] = React.useState<string[]>(allGenres);

  const genreFilter = (genreClicked: string): void => {
    const filteredMovies =
      genreClicked === 'All'
        ? Movies
        : Movies.filter(({ genres }) => genres.includes(genreClicked));
    setMovieCards(filteredMovies);
  };

  return (
    <section className="movie-container container">
      <FilterPanel filterMenu={filterMenu} genreFilter={genreFilter} />
      {movieCards.length ? (
        <MovieCard movieCards={movieCards} />
      ) : (
        <EmptyList />
      )}
    </section>
  );
};

export default MovieList;

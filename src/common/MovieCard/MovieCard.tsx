import React from 'react';
import PropTypes from 'prop-types';
import { MovieType } from '../../utils/data';
import './MovieCard.scss';

interface IMovieCard {
  movieCards: MovieType[];
}

interface IMovieType {
  id: number;
  url: string;
  title: string;
  genres: string[];
  release: string;
  rating: string;
}

const MovieCard: React.FC<IMovieCard> = ({ movieCards }: IMovieCard) => {
  return (
    <div className="movie-cards">
      {movieCards.map((movie: IMovieType) => {
        return (
          <div className="movie-cards__item" key={movie.id}>
            <img
              className="card-image"
              src={movie.url}
              alt={movie.title}
              height="486"
              width="324"
            />
            <div className="card-content">
              <div>
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-genre">{movie.genres.join(', ')}</p>
              </div>
              <div>
                <span className="card-release">{movie.release}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

MovieCard.propTypes = {
  movieCards: PropTypes.array.isRequired,
};

export default MovieCard;

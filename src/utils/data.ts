import film1 from '../assets/movies/film1.png';
import film2 from '../assets/movies/film2.png';
import film3 from '../assets/movies/film3.png';
import film4 from '../assets/movies/film4.png';
import film5 from '../assets/movies/film5.png';
import film6 from '../assets/movies/film6.png';

export type MovieType = {
  id: number;
  url: string;
  title: string;
  genres: string[];
  release: string;
  rating: string;
};

export const Movies: MovieType[] = [
  {
    id: 1,
    url: film1,
    title: 'Pulp Fiction',
    genres: ['Action', 'Adventure'],
    release: '2004',
    rating: '8.5',
  },
  {
    id: 2,
    url: film2,
    title: 'Bohemian Rhapsody',
    genres: ['Drama', 'Biography', 'Music'],
    release: '2003',
    rating: '5',
  },
  {
    id: 3,
    url: film3,
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning Movie'],
    release: '1994',
    rating: '9.5',
  },
  {
    id: 4,
    url: film4,
    title: 'Avengers: War of Infinity',
    genres: ['Action', 'Adventure'],
    release: '2004',
    rating: '10',
  },
  {
    id: 5,
    url: film5,
    title: 'Inception',
    genres: ['Action', 'Adventure'],
    release: '2003',
    rating: '7.8',
  },
  {
    id: 6,
    url: film6,
    title: 'Reservoir dogs',
    genres: ['Oscar winning Movie'],
    release: '1994',
    rating: '6.5',
  },
];

export const Genres: string[] = [
  'All',
  'Drama',
  'Comedy',
  'Action',
  'Oscar winning Movie',
];

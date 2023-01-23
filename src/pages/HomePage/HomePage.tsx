import React from 'react';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MoviesList/MovieList';
import Footer from '../../components/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <MovieList />
      <Footer />
    </>
  );
};

export default HomePage;

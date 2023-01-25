import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ErrorBoundary from './ErrorBoundary';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </>
  );
};

export default App;

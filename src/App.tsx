import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default withErrorBoundary(App, { FallbackComponent: ErrorPage });

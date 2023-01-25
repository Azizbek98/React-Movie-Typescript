import React from 'react';
// import HomePage from './pages/HomePage/HomePage';
import ErrorBoundary from './ErrorBoundary';
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage';

const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <LoginPage />
      </ErrorBoundary>
    </>
  );
};

export default App;

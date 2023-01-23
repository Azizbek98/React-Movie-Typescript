import React from 'react';
import error from '../../assets/error.png';
import './ErrorPage.scss';

const ErrorPage: React.FC = () => {
  return (
    <div className="error-container">
      <img className="error-image" src={error} alt="error" />
      <h1 className="error-title">
        <span>OOPS!</span> Something went wrong. Please try again.
      </h1>
    </div>
  );
};

export default ErrorPage;

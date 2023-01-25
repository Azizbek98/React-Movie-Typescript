import React from 'react';
import logo from '../../assets/logo.svg';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Log In</h1>
        <label className="login-label" htmlFor="user">
          User ID*
        </label>
        <input className="login-input" id="user" />
        <label className="login-label" htmlFor="password">
          Password*
        </label>
        <input className="login-input" id="password" />
        <div>
          <button>Reset</button>
          <button>Log In</button>
        </div>
      </form>
      <div className="login-footer">
        <img src={logo} alt="logo" height="25" />
      </div>
    </div>
  );
};

export default LoginPage;

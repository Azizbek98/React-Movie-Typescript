import React from 'react';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Log In</h1>
        <label htmlFor="user">User ID:</label>
        <input id="user" />
        <label htmlFor="password">Password:</label>
        <input id="password" />
        <div>
          <button>Reset</button>
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

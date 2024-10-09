import React, { useState } from 'react';
import './LogOrSign.css'; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
        <form>
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="input-field"
                required
              />
            </div>
          )}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
          <span onClick={toggleForm}>
            {isLogin ? ' Sign Up' : ' Log In'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
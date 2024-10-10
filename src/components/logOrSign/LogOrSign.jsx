import React, { useState } from 'react';
import './LogOrSign.css';  
import bcrypt from 'bcryptjs';  // 

const LogOrSign = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Email:", email);
    console.log("Hashed Password:", hashedPassword);

  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default LogOrSign;

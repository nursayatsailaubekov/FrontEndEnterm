import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (register(username, password)) {
      alert("Registration success!");
      navigate('/login');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input type="text" placeholder="Create email" onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Create password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        <Link to="/login" className="auth-link">Have an account? Login</Link>
      </div>
    </div>
  );
};

export default Register;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersAPI from "../../pages/utilities/user-api.js";
import "./style.css";
import Plant7 from "../../assets/images/plant7.png"

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Please enter both username and password.");
    } else {
      try {
        const logUser = await usersAPI.login({ username, password });
        if (!logUser) return;
        setUser(logUser);
        navigate("/home");
      } catch (e) {
        console.error("Login error:", e);
        setError("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Welcome Back!</h1>
        <p>
          We source the healthiest and most beautiful plants to bring nature’s
          finest to your home. We provide expert care advice to ensure your
          plants thrive.
        </p>
      </div>
                 <img className="corner1-image" src={Plant7} alt="corner1-image" />
      
      <div className="auth-right">
        <div className="auth-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersAPI from "../../pages/utilities/user-api.js";
import "./style.css";

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
      try{
        console.log("signing in")
        const logUser = await usersAPI.login({username: username, password: password});
        console.log(logUser)
        if (!logUser) return;
        setUser(logUser);
        navigate("/home");
      } catch(e){
        console.error("ERROR!!!!!:",e)
        return
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
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
  );
}

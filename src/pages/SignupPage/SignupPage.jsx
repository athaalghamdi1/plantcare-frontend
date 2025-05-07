import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersAPI from "../../pages/utilities/user-api.js";
import "./style.css";
import Plant4 from "../../assets/images/plant4.png";


export default function SignupPage({ setUser }) {
  const navigate = useNavigate();
  const initialState = { username: "", password: "", confirmPassword: "", email: "" };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({ username: '', password: '', email: '', confirmPassword: '' });

  let disabledSubmitBtn = Object.values(errors).some(val => val !== "") || Object.values(formData).some(val => val === "");

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    checkErrors(evt);
  }

  function checkErrors({ target }) {
    const updateErrors = { ...errors };

    if (target.name === 'username') {
      updateErrors.username = target.value.length < 3 ? 'Username must be at least 3 characters.' : "";
    }
    if (target.name === 'password') {
      updateErrors.password = target.value.length < 3 ? "Password must be at least 3 characters." : "";
    }
    if (target.name === 'confirmPassword') {
      updateErrors.confirmPassword = target.value !== formData.password ? "Passwords do not match." : "";
    }
    if (target.name === 'email') {
      updateErrors.email = !target.value.includes("@") ? "Enter a valid email." : "";
    }

    setErrors(updateErrors);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newUser = await usersAPI.signup(formData);
      setUser(newUser);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setUser(null);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Create Account</h1>
           <img className="cornerrr-image" src={Plant4} alt="cornerrr-image" />
          
      </div>

      <div className="auth-right">
        <div className="auth-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <p className="error">{errors.username}</p>}

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

            <button type="submit" disabled={disabledSubmitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

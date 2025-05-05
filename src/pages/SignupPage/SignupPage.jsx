import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const fakeSignupAPI = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...formData, id: Date.now() }), 1000);
  });
};

export default function SignupPage({ setUser }) {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid =
    Object.values(errors).every((val) => val === "") &&
    Object.values(formData).every((val) => val !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === "name") {
      newErrors.name =
        value.length < 3 ? "Name must be at least 3 characters." : "";
    }
    if (name === "email") {
      newErrors.email = !value.includes("@")
        ? "Email must include '@' symbol."
        : "";
    }
    if (name === "password") {
      newErrors.password =
        value.length < 3 ? "Password must be at least 3 characters." : "";
    }
    if (name === "confirmPassword") {
      newErrors.confirmPassword =
        value !== formData.password ? "Passwords do not match." : "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await fakeSignupAPI(formData);
      setUser(newUser);
      setFormData(initialState);
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err);
      setUser(null);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit" disabled={!isFormValid}>
          Create Account
        </button>
      </form>
    </div>
  );
}

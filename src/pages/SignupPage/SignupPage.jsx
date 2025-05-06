import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersAPI from "../../pages/utilities/api.js";

export default function SignupPage({ setUser }) {
  const navigate = useNavigate();
  const initialState = { username: "", password: "", confirmPassword: "", email: "" };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({ username: '', password: '', email: '', confirmPassword: '' });
  let disabledSubmitBtn = Object.values(errors).every(val => val === "") && Object.values(formData).every(val => val !== "") ? false : true;

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    checkErrors(evt);
  }

  function checkErrors({ target }) {
    const updateErrors = { ...errors };

    if (target.name === 'username') {
      updateErrors.username = target.value.length < 3 ? 'Your username must be at least three characters long.' : "";
    }
    if (target.name === 'password') {
      updateErrors.password = target.value.length < 3 ? "Your password must be at least three characters long." : "";
    }
    if (target.name === 'confirmPassword') {
      updateErrors.confirmPassword = target.value !== formData.password ? "Your passwords must match." : "";
    }
    if (target.name === 'email') {
      updateErrors.email = !target.value.includes("@") ? "Your email must include '@'." : "";
    }

    setErrors(updateErrors);
  }

  async function handleSubmit(evt) {
    try {
      evt.preventDefault();
      const newUser = await usersAPI.signup(formData);
      setUser(newUser);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setUser(null);
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button type="submit" disabled={disabledSubmitBtn}>Submit</button>
      </form>
    </>
  );
}

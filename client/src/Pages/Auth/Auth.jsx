import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Auth.css";
import icon from "../../assets/icon.jpg";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";

// Compact Password Validation
const validatePassword = (password) => {
  const errors = [];
  if (password.length < 8) errors.push("Min 8 chars");
  if (!/[A-Z]/.test(password)) errors.push("1 uppercase");
  if (!/[a-z]/.test(password)) errors.push("1 lowercase");
  if (!/[0-9]/.test(password)) errors.push("1 number");
  if (!/[@#$%^&*]/.test(password)) errors.push("1 special");
  return errors;
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
    setError("");
    setPasswordError("");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const errors = validatePassword(newPassword);
    setPasswordError(errors.join(" | "));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter email & password.");
      return;
    }

    if (isSignup) {
      if (!name) {
        setError("Enter name.");
        return;
      }
      try {
        const response = await dispatch(signup({ name, email, password }, navigate));
        if (response.error) setError(response.error.message);
      } catch (err) {
        setError("Signup failed.");
      }
    } else {
      try {
        const response = await dispatch(login({ email, password }, navigate));
        if (response.error) {
          setError(response.error.message);
        } else {
          setError("");
        }
      } catch (err) {
        setError("Wrong password.");
      }
    }
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        <img src={icon} alt="Stack Overflow" className="login-logo" />
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>Forgot password?</p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <div className="error-container">
            {passwordError && <p className="error-msg">{passwordError}</p>}
          </div>

          <div className="error-container">
            {error && <p className="error-msg">{error}</p>}
          </div>

          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button type="button" className="handle-switch-btn" onClick={handleSwitch}>
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;

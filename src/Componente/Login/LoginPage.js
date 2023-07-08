import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email,
        password,
      });

      console.log(response.data);

      localStorage.setItem("loggedIn", "true");
      window.location.href = "/"; // Redirect to home page
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={classes.container}>
      <h2>Login</h2>

      <form onSubmit={handleLogin} className={classes.loginForm}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={classes.inputField}
          required
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={classes.inputField}
          required
        />

        <button type="submit" className={classes.submitBtn}>
          Login
        </button>
      </form>

      <div className={classes.signup}>
        Don't have an account? <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;

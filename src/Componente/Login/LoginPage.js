import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Define a function for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Send the form data to the server

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className={classes.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className={classes.loginForm}>
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

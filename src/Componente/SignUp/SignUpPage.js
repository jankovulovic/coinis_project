// Import necessary packages and styles
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUpPage.module.css";

const SignUpPage = () => {
  // Declare state variables for the form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Define a function for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send the form data to the server

    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
  };

  return (
    <div className={classes.container}>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit} className={classes.signUpForm}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className={classes.inputField}
          required
        />

        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className={classes.inputField}
          required
        />

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

        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className={classes.inputField}
          required
        />

        <button type="submit" className={classes.submitBtn}>
          Sign Up
        </button>
      </form>

      <div className={classes.login}>
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default SignUpPage;

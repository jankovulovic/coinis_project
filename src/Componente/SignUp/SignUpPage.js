import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import classes from "./SignUpPage.module.css";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        "http://gitarist.me:8880/api/register/",
        {
          username: `${firstName} ${lastName}`,
          email,
          password,
          password2: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);

      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error.response.data);
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return (
      <div className={classes.container}>
        {/* <h2>Sign </h2> */}
        <h2>
          Registration successful! You can now proceed to{" "}
          <Link to="/login">
            <b>Login</b>
          </Link>
          .
        </h2>
      </div>
    );
  }

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

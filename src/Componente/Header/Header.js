import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Header.module.css";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInStatus = () => {
      const isLoggedIn = localStorage.getItem("loggedIn") === "true";
      setLoggedIn(isLoggedIn);
    };

    checkLoggedInStatus();
  }, []);

  const handleLogout = () => {
    const logoutUrl = "http://127.0.0.1:8000/api/logout/";

    axios
      .post(logoutUrl)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          localStorage.removeItem("loggedIn");
          // window.location.reload();
        } else {
          throw new Error("Logout request failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/">Gitarista</Link>
        </div>
        <div className={classes.navbarItems}>
          <div className={classes.item}>
            <Link to="/">Home</Link>
          </div>
          <div className={classes.item}>
            <Link to="/aboutUs">About us</Link>
          </div>
          <div className={classes.item}>
            <Link to="/search">Search</Link>
          </div>
          {loggedIn && (
            <div className={classes.item}>
              <Link to="/profile">Profile</Link>
            </div>
          )}
          <div className={classes.loginDiv}>
            {loggedIn ? (
              <button className={classes.loginBtn} onClick={handleLogout}>
                <Link to="/">Logout</Link>
              </button>
            ) : (
              <Link to="/login">
                <button className={classes.loginBtn}>Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

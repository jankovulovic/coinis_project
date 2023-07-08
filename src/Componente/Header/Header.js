import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");

    window.location.reload(); 
  };

  const loggedIn = localStorage.getItem("loggedIn") === "true";

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
                Logout
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

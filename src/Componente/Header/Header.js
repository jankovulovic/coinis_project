import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "react-bootstrap/Dropdown";

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
    axios
      .post("http://gitarist.me:8880/api/logout/", null, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          localStorage.removeItem("loggedIn");
          window.location.reload();
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
          <Link to="/">Gitarist</Link>
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

      <Dropdown className="d-inline" id={classes.navbarMenu}>
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className={classes.menuButton}
        >
          <MenuIcon />
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes.dropdownPart}>
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/aboutUs">About Us</Dropdown.Item>
          <Dropdown.Item href="/search">Search</Dropdown.Item>
          {loggedIn && <Dropdown.Item href="/profile">Profile</Dropdown.Item>}
        </Dropdown.Menu>

        <div className={classes.loginDivMenu}>
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
      </Dropdown>
    </>
  );
};

export default Header;

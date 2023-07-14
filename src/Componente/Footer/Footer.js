import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <div className={classes.wrapper}>
      <footer>
        <div className={classes.topFooter}>
          <div className={classes.topSection}>
            <div className={classes.links}>
              <Link to="/">Home</Link>
            </div>
            <div className={classes.links}>
              <Link to="/aboutUs">About us</Link>
            </div>
            <div className={classes.links}>
              <Link to="/search">Search</Link>
            </div>
            {loggedIn && (
              <div className={classes.links}>
                <Link to="/addingPage">Add Music</Link>
              </div>
            )}

            <div className={classes.links}>
              <Link to="/contact">Contact</Link>
            </div>
            {!loggedIn && (
              <div className={classes.links}>
                <Link to="/login">Login</Link>
              </div>
            )}
            {!loggedIn && (
              <div className={classes.links}>
                <Link to="/register">Register</Link>
              </div>
            )}
            {loggedIn && (
              <div className={classes.links}>
                <Link to="/profile">Profile settings</Link>
              </div>
            )}
          </div>
        </div>
        <div className={classes.botFooter}>
          <div className={classes.botFooterIcons}>
            <div>
              <FacebookIcon fontSize="large" />
            </div>
            <div>
              <TwitterIcon fontSize="large" />
            </div>
            <div>
              <InstagramIcon fontSize="large" />
            </div>
          </div>
          <div>© 2023 Gitarista, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.topFooter}>
        <div className={classes.topFooterLeft}>
          <div className={classes.topSection}>
            <div className={classes.title}>General</div>
            <div className={classes.links}>
              <Link to="/">Home</Link>
            </div>
            <div className={classes.links}>
              <Link to="/aboutUs">About us</Link>
            </div>
            <div className={classes.links}>
              <Link to="/search">Search</Link>
            </div>
            <div className={classes.links}>
              <Link to="/addingPage">Add Music</Link>
            </div>
          </div>
          <div className={classes.topSection}>
            <div className={classes.title}>Communication</div>
            <div className={classes.links}>
              <Link to="/contact">Contact</Link>
            </div>
            <div className={classes.links}>
              <Link to="/login">Login</Link>
            </div>
            <div className={classes.links}>
              <Link to="/register">Register</Link>
            </div>
          </div>
          {/* <div className={classes.topSection}>
            <div className={classes.title}>Section</div>
            <div className={classes.links}>Home</div>
            <div className={classes.links}>About us</div>
            <div className={classes.links}>Contact</div>
            <div className={classes.links}>List</div>
          </div> */}
        </div>
        <div className={classes.topFooterRight}>
          <div className={classes.title}>Subscibe to our Patrion</div>
          <div className={classes.text}>
            "Unlock the melodies, master the chords, and unleash your inner
            guitarist."
          </div>
          <div></div>
        </div>
      </div>
      <hr></hr>
      <div className={classes.botFooter}>
        <div>© 2023 Company, Inc. All rights reserved.</div>
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
      </div>
    </footer>
  );
};

export default Footer;

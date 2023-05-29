import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.topFooter}>
        <div className={classes.topFooterLeft}>
          <div className={classes.topSection}>
            <div className={classes.title}>Section</div>
            <div className={classes.links}>Home</div>
            <div className={classes.links}>About us</div>
            <div className={classes.links}>Contact</div>
            <div className={classes.links}>List</div>
          </div>
          <div className={classes.topSection}>
            <div className={classes.title}>Section</div>
            <div className={classes.links}>Home</div>
            <div className={classes.links}>About us</div>
            <div className={classes.links}>Contact</div>
            <div className={classes.links}>List</div>
          </div>
          <div className={classes.topSection}>
            <div className={classes.title}>Section</div>
            <div className={classes.links}>Home</div>
            <div className={classes.links}>About us</div>
            <div className={classes.links}>Contact</div>
            <div className={classes.links}>List</div>
          </div>
        </div>
        <div className={classes.topFooterRight}>
          <div className={classes.title}>Subscribe to our newsletter</div>
          <div className={classes.text}>
            Randomly put text together , i dont know what is here.
          </div>
          <div></div>
        </div>
      </div>
      <hr></hr>
      <div className={classes.botFooter}>
        <div>© 2023 Company, Inc. All rights reserved.</div>
        <div className={classes.botFooterIcons}>
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

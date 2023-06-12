import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to="/contact">Contact</Link>
          </div>
          <div className={classes.item}>
            <Link to="/search">Search</Link>
          </div>
          <div className={classes.loginDiv}>
            <Link to="/signin">
              <button className={classes.loginBtn}>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

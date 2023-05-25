import classes from "./Header.module.css";
import Logo from "../../Assets/logoreal.jpg";

const Header = () => {
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img src={Logo} alt="Guitar Logo" />
        </div>
        <div className={classes.navbarItems}>
          <div className={classes.item}>Home</div>
          <div className={classes.item}>About us </div>
          <div className={classes.item}>Contact</div>
          <div className={classes.item}>List</div>
        </div>
      </div>
    </>
  );
};

export default Header;

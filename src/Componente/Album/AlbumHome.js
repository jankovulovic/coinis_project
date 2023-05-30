import classes from "./AlbumHome.module.css";
import albumImg from "../../Assets/guitarman2.jpg";
import { Link } from "react-router-dom";

const AlbumHome = () => {
  return (
    <div className={classes.item}>
      <div>
        <img src={albumImg} alt="group pi" />
      </div>
      <div className={classes.albumInfo}>
        <div className={classes.albumTitle}>
          <Link to="/grupa">Title of band</Link>
        </div>
        <div className={classes.albumText}>
          Small Text for whatever resone.This is just introduction.
        </div>
      </div>
    </div>
  );
};

export default AlbumHome;

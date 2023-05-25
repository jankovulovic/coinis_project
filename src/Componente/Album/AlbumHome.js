import classes from "./AlbumHome.module.css";
import albumImg from "../../Assets/guitarman2.jpg";

const AlbumHome = () => {
  return (
    <div className={classes.item}>
      <div>
        <img src={albumImg} alt="group pi" />
      </div>
      <div className={classes.albumInfo}>
        <div className={classes.albumTitle}>Title of band</div>
        <div className={classes.albumText}>
          Small Text for whatever resone.This is just introduction.
        </div>
      </div>
    </div>
  );
};

export default AlbumHome;

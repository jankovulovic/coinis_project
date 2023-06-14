import classes from "./Song.module.css";
import image from "../../Assets/guitarman2.jpg";

const Song = () => {
  return (
    <>
      <div className={classes.songFlex}>
        <div className={classes.imgDiv}>
          <img src={image} alt="Profile man" />
        </div>
        <div className={classes.songInfo}>
          <div className={classes.songTitle}>
            <b>Author</b>: Linkin Park Linkin 
          </div>
          <div className={classes.songTitle}>
            <b>Name</b>: In the End In the End 
          </div>
          {/* <div className={classes.songCreator}>
            <b>Creator</b>: Username
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Song;

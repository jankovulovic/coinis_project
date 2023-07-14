import { Link } from "react-router-dom";

import classes from "./Song.module.css";

const Song = ({ authorName, songTitle, authorImg, songId }) => {
  return (
    <>
      <Link className={classes.songFlex} to={`/songPage/${songId}`}>
        <div className={classes.imgDiv}>
          <img src={authorImg} alt="Profile man" />
        </div>
        <div className={classes.songInfo}>
          <div className={classes.songTitle}>
            <b>Author</b>: {authorName}
          </div>
          <div className={classes.songTitle}>
            <b>Name</b>: {songTitle}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Song;

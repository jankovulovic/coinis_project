import classes from "./Song.module.css";

const Song = ({ authorName, songTitle, authorImg }) => {
  return (
    <>
      <div className={classes.songFlex}>
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
          {/* <div className={classes.songCreator}>
            <b></b>: {authorImg}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Song;

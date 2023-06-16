import classes from "./AuthorCard.module.css";
import image from "../../Assets/profilePic.jpg";

const AuthorCard = () => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgDiv}>
          <img src={image} alt="profile man" />
        </div>
        <div className={classes.titleName}>Username of Author</div>
        <div className={classes.latest}>
          {" "}
          {"> "}Latest uploads{" <"}{" "}
        </div>
        <div className={classes.songList}>
          <div className={classes.item}>pjesma 1 </div>
          <div className={classes.item}>pjesma 1 </div>
          <div className={classes.item}>pjesma 1 </div>
        </div>
      </div>
    </>
  );
};

export default AuthorCard;

import classes from "./AuthorCard.module.css";

const AuthorCard = ({ imgLink, authorName }) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgDiv}>
          <img src={imgLink} alt="profile man" />
        </div>
        <div className={classes.titleName}>{authorName}</div>
        <div className={classes.latest}>
          {" "}
          {"> "}Latest uploads{" <"}{" "}
        </div>
      </div>
    </>
  );
};

export default AuthorCard;

import { Link } from "react-router-dom";
import classes from "./AuthorCard.module.css";

const AuthorCard = ({ imgLink, authorName }) => {
  return (
    <>
      <div className={classes.card}>
        <Link to="/grupa">
          <div
            className={classes.imgDiv}
            style={{
              backgroundImage: `url(${imgLink})`,
              width: "220px",
              height: "220px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={classes.titleName}>{authorName}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AuthorCard;

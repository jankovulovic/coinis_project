import { Link } from "react-router-dom";
import BigList from "../BigList/BigList";
import classes from "./Home.module.css";

const Home = () => {
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <>
      <div className={classes.container}>
        <div className={classes.topText}>
          Discover the joy of playing guitar and Master the Art of guitar chords
        </div>
        <div className={classes.middleText}>
          Unleash your inner musician with our extensive repertoire of songs.
          From classics to modern hits, learn to play captivating chords and
          captivate your audience with every strum.
        </div>
      </div>

      <BigList />

      {loggedIn && (
        <>
          <div className={classes.quoteTitle}>
            Want to Add or Edit your own music ?
          </div>
          <div className={classes.addOptions}>
            <div className={classes.addMusic}>
              <div className={classes.optTitle}>Add your own Music.</div>
              <div className={classes.text}>
                This would be a guide for adding your own music. If you click on
                this button, it will lead you to the page for posting your own
                music. If you are not logged in, it should request that you log
                in as it would be foolish to allow anything if you are not
                logged in.
              </div>
              <div className={classes.linkDivs}>
                <Link to="/addingPage">
                  <div className={classes.optBtn}>Button</div>
                </Link>
              </div>
            </div>
            <div className={classes.addPlaylist}>
              <div className={classes.optTitle}>Edit your songs.</div>
              <div className={classes.text}>
                This is still a new feature, and I have no clue what I would put
                here. How this will be done is questionable. Need more thinking.
              </div>
              <div className={classes.linkDivs}>
                <Link to="/profile">
                  <div className={classes.optBtn}>Button</div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;

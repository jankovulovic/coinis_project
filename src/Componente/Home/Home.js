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
                Welcome to our website! Here, you have the opportunity to add
                your own music and make it a part of our collection. We're
                thrilled to provide this platform for music enthusiasts like
                you.
              </div>
              <div className={classes.linkDivs}>
                <Link to="/addingPage">
                  <div className={classes.optBtn}>Add Song</div>
                </Link>
              </div>
            </div>
            <div className={classes.addPlaylist}>
              <div className={classes.optTitle}>Edit your songs.</div>
              <div className={classes.text}>
                This button will take you to your Profile page, where you'll
                have the ability to delete or edit your songs. We encourage you
                to carefully follow the provided guidelines to ensure a
                harmonious experience for everyone involved.
              </div>
              <div className={classes.linkDivs}>
                <Link to="/profile">
                  <div className={classes.optBtn}>Edit Song</div>
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

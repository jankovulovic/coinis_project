import React from "react";
import classes from "./TopSection.module.css";

const TopSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topText}>
        Discover the joy of playing guitar and Master the Art of guitar chords
      </div>
      <div className={classes.middleText}>
        Unleash your inner musician with our extensive repertoire of songs. From
        classics to modern hits, learn to play captivating chords and captivate
        your audience with every strum.
      </div>
    </div>
  );
};

export default TopSection;

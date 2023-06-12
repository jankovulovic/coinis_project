import React from "react";
import classes from "./AlphabetArray.module.css";
import { Link } from "react-router-dom";

function AlphabetArray() {
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  return (
    <div>
      <div className={classes.listFlex}>
        <div> | </div>
        {alphabet.map((letter) => (
          <>
            <div key={letter}>
              <Link to="/" className={classes.item}>
                {letter}
              </Link>
            </div>
            <div> | </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default AlphabetArray;

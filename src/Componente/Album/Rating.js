import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import classes from "./Rating.module.css";

export default function HalfRating() {
  return (
    <Stack spacing={1} className={classes.score}>
      <div>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </div>
      <div> 4.4 </div>
    </Stack>
  );
}

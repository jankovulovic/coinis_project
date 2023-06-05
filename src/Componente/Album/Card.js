import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from "../../Assets/guitarman2.jpg";
import classes from "./Card.module.css";
import HalfRating from "./Rating";
import { Link } from "react-router-dom";

export default function AlbumCard() {
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="band image"
        height="200"
        image={img}
        className={classes.img}
      />
      <CardContent className={classes.albumContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.albumTitle}
        >
          Linkin Park
        </Typography>
      </CardContent>
      <HalfRating />
      <div className={classes.songs}>
        <div className={classes.songLink}>
          <Link to="/grupa"> Crawling 3:20 </Link>
        </div>
        <div className={classes.songLink}> In the End 3:36 </div>
      </div>
    </Card>
  );
}

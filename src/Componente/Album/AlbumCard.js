import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HalfRating from "./Rating";
import classes from "./AlbumCard.module.css";

const AlbumCard = ({ authorName, imgLink, title }) => {
  return (
    <Card className={classes.card}>
      <Link to="/grupa">
        <CardMedia
          component="img"
          alt="band image"
          height="200"
          image={imgLink}
          className={classes.img}
        />
      </Link>
      <CardContent className={classes.albumContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.albumTitle}
        >
          {authorName}
        </Typography>
      </CardContent>
      <HalfRating />
      <div className={classes.songs}>
        {/* {title && title.length > 0 ? (
          title.map((title, index) => ( */}
        <div className={classes.songLink}>
          <Link to="/grupa">{title}</Link>
        </div>
        {/* ))
        ) : (
          <div className={classes.songLink}>
            No titles available for this album.
          </div>
        )} */}
      </div>
    </Card>
  );
};

export default AlbumCard;

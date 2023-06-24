import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import HalfRating from "./Rating";
import classes from "./AlbumCard.module.css";
import AlbumSongsList from "./ALbumSongsList";

const AlbumCard = ({ authorName, imgLink, title, authorId }) => {
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
      <AlbumSongsList authorId={authorId} />
    </Card>
  );
};

export default AlbumCard;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from "./AlbumCard.module.css";
import HalfRating from "./Rating";
import { Link } from "react-router-dom";

const AlbumCard = ({ authorName, imgLink, titles }) => {
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
        {titles && titles.length > 0 ? (
          titles.map((title, index) => (
            <div className={classes.songLink} key={index}>
              <Link to="/grupa">{title}</Link>
            </div>
          ))
        ) : (
          <div className={classes.songLink}>
            No titles available for this album.
          </div>
        )}
      </div>
    </Card>
  );
};

export default AlbumCard;

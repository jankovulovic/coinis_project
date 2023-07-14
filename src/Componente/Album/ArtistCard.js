import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArtistSongsList from "./ArtistSongsList";
import GenericImage from "../../Assets/ArtistImage.avif";

import classes from "./ArtistCard.module.css";

const ArtistCard = ({ authorName, imgLink, authorId }) => {
  const handleImageError = (event) => {
    event.target.src = GenericImage;
  };

  return (
    <Card className={classes.card}>
      <Link to={`/group/${authorId}`}>
        <CardMedia
          component="img"
          alt="band image"
          height="200"
          src={imgLink}
          onError={handleImageError}
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
      <ArtistSongsList authorId={authorId} />
    </Card>
  );
};

export default ArtistCard;

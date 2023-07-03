import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import HalfRating from "./Rating";
import classes from "./SoloAlbum.module.css";
import ListOfSongs from "./ListOfSongs";

const SoloAlbum = () => {
  const [author, setAuthor] = useState(null);
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v2/songs/authors/${id}/`)
      .then((response) => {
        const { name, link } = response.data[0];
        setAuthor({ name, link });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get(`http://127.0.0.1:8000/api/v2/songs/0/?author_id=${id}`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.breadcrumbs}>
          <Link to="/">Home</Link> / {author.name}
        </div>
        <div className={classes.infoContainer}>
          <div>
            <img
              src={author.link}
              alt="albumImg"
              height="300"
              width="400"
              className={classes.albumImg}
            />
          </div>
          <div className={classes.importantInfo}>
            <div className={classes.title}>{author.name}</div>
            <HalfRating />
            <div className={classes.statTable}>
              <div className={classes.statTitle}>
                <div className={classes.stats}>Number of songs: </div>
                <div className={classes.stats}>Genre(s): </div>
                <div className={classes.stats}>Popularity ranking: </div>
              </div>
              <div className={classes.statValue}>
                <div>21</div>
                <div>Rock, Punk, Metal</div>
                <div>Rank, rank</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.titleSec}>About band</div>
          <div className={classes.infoText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div>
          <div className={classes.titleSec}>Tags</div>
          <div className={classes.infoTags}>
            <div className={classes.tags}>#Rock</div>
            <div className={classes.tags}>#Metal</div>
            <div className={classes.tags}>#Punk</div>
            <div className={classes.tags}>#LP</div>
            <div className={classes.tags}>#LinkinPark</div>
            <div className={classes.tags}>#Rank1</div>
            <div className={classes.tags}>#100+Songs</div>
            <div className={classes.tags}>#Vocalist</div>
          </div>
        </div>
        <div>
          {/* <div className={classes.filters}>
            <div className={classes.filterBand}>Songs</div>
            <div className={classes.filterSolo}>Discussion</div>
          </div> */}
          <div className={classes.songList}>
            <ListOfSongs songs={songs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SoloAlbum;
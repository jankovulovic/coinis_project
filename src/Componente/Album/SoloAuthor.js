import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import HalfRating from "./Rating";
import ListOfSongs from "./ListOfSongs";
import { API_URL, API_VERSION } from "../../Variables/Config";
import GenericImage from "../../Assets/ArtistImage.avif";

import classes from "./SoloAuthor.module.css";

const SoloAlbum = () => {
  const [author, setAuthor] = useState(null);
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(API_URL + API_VERSION + `songs/authors/${id}/`)
      .then((response) => {
        const { name, link } = response.data[0];
        setAuthor({ name, link });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get(API_URL + API_VERSION + `songs/0/?author_id=${id}`)
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

  const backgroundImageStyle = {
    backgroundImage: `url(${author.link || GenericImage})`,
    width: "500px",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.breadcrumbs}>
          <Link to="/">Home</Link> / {author.name}
        </div>
        <div className={classes.infoContainer}>
          <img
            className={classes.albumImg}
            style={backgroundImageStyle}
            alt=""
          />

          <div className={classes.importantInfo}>
            <div className={classes.title}>{author.name}</div>
            <HalfRating />
            <div className={classes.statTable}>
              <div className={classes.statTitle}>
                <div className={classes.stats}>
                  Number of songs: <span>{songs.length}</span>
                </div>
                <div className={classes.stats}>Genre(s): Rock, Punk, Metal</div>
                <div className={classes.stats}>
                  Popularity ranking: Rank, rank
                </div>
              </div>
              <div className={classes.statValue}>
                <div></div>
                <div></div>
                <div></div>
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
          <div className={classes.titleSecSongs}>List of Songs</div>
          <div className={classes.songList}>
            {songs.length === 0 ? (
              <div className={classes.dummyText}>No songs were added.</div>
            ) : (
              <ListOfSongs songs={songs} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoloAlbum;

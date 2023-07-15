import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL, API_VERSION } from "../../Variables/Config";

import classes from "./ArtistSongsList.module.css";

const ArtistSongsList = ({ authorId }) => {
  const [songs, setSongs] = useState([]);

  const SONGS_COUNT = 3;

  useEffect(() => {
    axios
      .get(
        API_URL +
          API_VERSION +
          `songs/0/?author_id=${authorId}&page_size=${SONGS_COUNT}`
      )
      .then((response) => {
        // console.log(response);
        const datas = response.data;
        setSongs(datas);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [authorId]);

  return (
    <div className={classes.songs}>
      {songs.map((item) => {
        return (
          <div className={classes.songLink}>
            <Link to={`/songPage/${item.song_id}`}> {item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
export default ArtistSongsList;

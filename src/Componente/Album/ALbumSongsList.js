import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./AlbumSongsList.module.css";
import { Link } from "react-router-dom";

const AlbumSongsList = ({ authorId }) => {
  const [songs, setSongs] = useState([]);

  const API_URL = "http://gitarist.me:8880";
  const API_VERSION = "/api/v2/";
  const SONGS_COUNT = 3;

  useEffect(() => {
    axios
      .get(
        API_URL +
          API_VERSION +
          `songs/0/?author_id=${authorId}&page_size=${SONGS_COUNT}`
      )
      .then((response) => {
        console.log(response);
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
export default AlbumSongsList;

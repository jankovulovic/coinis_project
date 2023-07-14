import React from "react";
import { Link } from "react-router-dom";
import classes from "./SoloAuthor.module.css";

const ListOfSongs = ({ songs }) => {
  return (
    <>
      {songs.map((song) => (
        <div className={classes.songItem} key={song.song_id}>
          <Link to={`/songPage/${song.song_id}`}>
            {song.author_name} - {song.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default ListOfSongs;

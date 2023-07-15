import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL, API_VERSION } from "../../Variables/Config";
import GenericAuthorImage from "../../Assets/ArtistImage.avif";

import classes from "./Profile.module.css";

const Profile = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get(API_URL + API_VERSION + `songs/0/`)
      .then((response) => {
        const allSongs = response.data;
        const filteredSongs = allSongs.filter(
          (song) => song.user_id === parseInt(userId)
        );
        setSongs(filteredSongs);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userId]);

  const handleSongClick = (song) => {
    setSelectedSong(song);
    setUpdatedText(song.text_with_accords);
  };

  const handleTextAreaChange = (event) => {
    setUpdatedText(event.target.value);
  };

  const handleSaveText = () => {
    if (selectedSong) {
      const songId = selectedSong.song_id;
      axios
        .put(
          API_URL + API_VERSION + `songs/${songId}/`,
          {
            title: selectedSong.title,
            text_with_accords: updatedText,
            user_id: selectedSong.user_id,
            author_id: selectedSong.author_id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const updatedSong = response.data;
          const updatedSongs = songs.map((song) =>
            song.song_id === updatedSong.song_id ? updatedSong : song
          );
          setSongs(updatedSongs);
          setSelectedSong(null);
          setUpdatedText("");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleDelete = () => {
    if (selectedSong) {
      const confirmDelete = window.confirm(
        `Do you want to delete ${selectedSong.author_name} - ${selectedSong.title}?`
      );
      if (confirmDelete) {
        const songId = selectedSong.song_id;
        axios
          .delete(API_URL + API_VERSION + `songs/${songId}/`)
          .then((response) => {
            const updatedSongs = songs.filter(
              (song) => song.song_id !== songId
            );
            setSongs(updatedSongs);
            setSelectedSong(null);
            setUpdatedText("");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerTwo}>
        <div className={classes.profileInfo}>
          <div className={classes.profileTitle}>User Profile</div>
          <div className={classes.item}>Username: {username}</div>
          <div className={classes.item}>Email: {email}</div>
        </div>

        <div>
          {songs.length > 0 ? (
            <div>
              <div className={classes.titleBig}>Songs added:</div>
              <div className={classes.songList}>
                {songs.map((song) => (
                  <div
                    key={song.song_id}
                    className={classes.songItem}
                    onClick={() => handleSongClick(song)}
                  >
                    <div className={classes.songFlex}>
                      <div className={classes.imgDiv}>
                        <img
                          src={song.author_link || GenericAuthorImage}
                          alt={song.author_name}
                        />
                      </div>
                      <div className={classes.songInfo}>
                        <div className={classes.songTitle}>
                          <b>Author</b>: {song.author_name}
                        </div>
                        <div className={classes.songTitle}>
                          <b>Name</b>: {song.title}
                        </div>
                      </div>
                    </div>
                    <div className={classes.realButtons}>
                      {selectedSong === song && (
                        <button
                          onClick={handleDelete}
                          className={classes.deleteBtn}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {selectedSong && (
                <div className={classes.formDiv}>
                  <form className={classes.form}>
                    <div className={classes.formItem}>
                      <label htmlFor="title">
                        {selectedSong.author_name} - {selectedSong.title}
                      </label>
                    </div>
                    <div className={classes.formItem}>
                      <label htmlFor="text">Text with Chords:</label>
                      <textarea
                        id="text"
                        value={updatedText}
                        onChange={handleTextAreaChange}
                      />
                    </div>
                  </form>
                  <div className={classes.buttonDiv}>
                    <button
                      onClick={handleSaveText}
                      className={classes.saveButton}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={classes.startNowBtn}>
              You haven't added any songs yet? It's gonna be a simple process,
              but don't forget to follow the guidelines.{" "}
              <Link to="/addingPage">Start now!</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

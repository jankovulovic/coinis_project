import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, API_VERSION, chords } from "../../Variables/Config";
import GenericImage from "../../Assets/ArtistImage.avif";

import classes from "./SongPage.module.css";

const formatTextWithAccords = (textWithAccords) => {
  const lines = textWithAccords.split("\n");
  const formattedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line) {
      if (i % 2 === 0) {
        const chords = line.split(/\s+/);
        const chordLine = chords
          .map((chord) => `<span class="chord">${chord}</span>`)
          .join(" ");
        formattedLines.push(chordLine);
      } else {
        formattedLines.push(`<span class="lyric">${line}</span>`);
      }
    } else {
      formattedLines.push("");
    }
  }

  return formattedLines;
};

const SongPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await fetch(API_URL + API_VERSION + `songs/${id}/`);
        const data = await response.json();
        setSong(data[0]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSong();
  }, [id]);

  const handleScrollDown = () => {
    setScrollDown(true);

    const scrollToBottom = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        return;
      }

      window.scrollBy(0, 1);
      if (scrollDown) {
        setTimeout(scrollToBottom, 20);
      }
    };

    scrollToBottom();
  };

  if (!song) {
    return <div>Loading...</div>;
  }

  const formattedText = formatTextWithAccords(song.text_with_accords, chords);

  const backgroundImageStyle = song.author_link
    ? {
        backgroundImage: `url(${song.author_link})`,
        width: "500px",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundImage: `url(${GenericImage})`,
        width: "500px",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

  return (
    <div className={classes.container}>
      <div className={classes.breadcrumbs}>
        <Link to="/">Home </Link>/{" "}
        <Link to={`/group/${song.author_id}`}>{song.author_name} </Link>/{" "}
        {song.title}
      </div>
      <div className={classes.info}>
        <div className={classes.imgDiv}>
          <img style={backgroundImageStyle} alt="" />
        </div>
        <div className={classes.infoDiv}>
          <div className={classes.Title}>
            {song.author_name} - {song.title}
          </div>
        </div>
      </div>
      <button onClick={handleScrollDown} className={classes.scrollBtn}>
        Smart Scroll
      </button>

      <pre className={classes.chords}>
        {formattedText.map((line, index) => (
          <React.Fragment key={index}>
            <span dangerouslySetInnerHTML={{ __html: line }}></span>
            <br />
          </React.Fragment>
        ))}
      </pre>
    </div>
  );
};

export default SongPage;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./SongPage.module.css";

const SongPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v2/songs/${id}/`
        );
        const data = await response.json();
        setSong(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSong();
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.breadcrumbs}>
        <Link to="/">Home </Link>/ <Link to="/grupa">{song.author_name} </Link>/{" "}
        {song.title}
      </div>
      <div className={classes.info}>
        <div className={classes.imgDiv}>
          <img
            // src={song.author_link}
            // alt={song.author_name}
            style={{
              backgroundImage: `url(${song.author_link})`,
              width: "300px",
              height: "200px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            alt=""
          />
        </div>
        <div className={classes.infoDiv}>
          <div className={classes.Title}>{song.title}</div>
          <div className={classes.authorName}>
            <b>Author :</b> {song.author_name}
          </div>
          <div className={classes.authorName}>
            <b>Genre(s) : </b>
          </div>
        </div>
      </div>
      <pre className={classes.chords}>{song.text_with_accords}</pre>
    </div>
  );
};

export default SongPage;

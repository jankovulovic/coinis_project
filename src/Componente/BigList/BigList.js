import classes from "./BigList.module.css";
// import AlbumHome from "../Album/AlbumHome";
import { Link } from "react-router-dom";
import AlbumCard from "../Album/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const BigList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/song/author/0/")
      .then((response) => {
        const data = response.data;
        const songData = data.map((song) => ({
          authorName: song.author__name,
          title: song.title,
        }));
        setSongs(songData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.quoteTitle}>Most Popular Albums by:</div>
        <div className={classes.filters}>
          <div className={classes.filterBand}>Official Bands</div>
          <div className={classes.filterSolo}>Solo Artists</div>
        </div>

        <div className={classes.albums}>
          {songs.map((song) => (
            <AlbumCard
              key={song.id}
              authorName={song.authorName}
              title={song.title}
            />
          ))}
        </div>

        <div className={classes.linkDiv}>
          <Link to="/list" className={classes.linkBtn}>
            <div className={classes.seeAll}>See All Creators</div>
          </Link>
        </div>

        <div className={classes.quoteTitle}>
          Add your own music or make your playlist ?
        </div>
        <div className={classes.addOptions}>
          <div className={classes.addMusic}>
            <div className={classes.optTitle}>Add your own Music.</div>
            <div>
              This would be a guide for adding your own music. If you click on
              this button it will lead you to the page that is for posting your
              own music. If you are not loged in it should request that you have
              to log in as it would be stupid to allow anything if you not loged
              in.
            </div>
            <div className={classes.linkDivs}>
              <Link to="/list">
                <div className={classes.optBtn}>Button</div>
              </Link>
            </div>
          </div>
          <div className={classes.addPlaylist}>
            <div className={classes.optTitle}>Make your own Playlist.</div>
            <div>
              This is still new feature and i have no clue what i would put
              here. How this will be done is questionable. Need more thinking.
            </div>
            <div className={classes.linkDivs}>
              <Link to="/list">
                <div className={classes.optBtn}>Button</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigList;

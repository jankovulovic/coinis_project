import classes from "./BigList.module.css";
import { Link } from "react-router-dom";
import AlbumCard from "../Album/AlbumCard";
import axios from "axios";
import { useEffect, useState } from "react";

const BigList = () => {
  const [authors, setAuthors] = useState([]);
  const API_URL = "http://127.0.0.1:8000";
  const API_VERSION = "/api/v2/";

  useEffect(() => {
    axios
      .get(API_URL + API_VERSION + `songs/authors/0/?page_size=10`)
      .then((response) => {
        const datas = response.data;
        setAuthors(datas);
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
          {authors.length > 0 &&
            authors.map((data) => (
              <AlbumCard
                key={data.id}
                authorName={data.name}
                imgLink={data.link}
                title={data.title}
                authorId={data.author_id}
              />
            ))}
        </div>

        <div className={classes.linkDiv}>
          <Link to="/search" className={classes.linkBtn}>
            <div className={classes.seeAll}>See All Creators</div>
          </Link>
        </div>

        <div className={classes.quoteTitle}>
          Add your own music or make your playlist?
        </div>
        <div className={classes.addOptions}>
          <div className={classes.addMusic}>
            <div className={classes.optTitle}>Add your own Music.</div>
            <div>
              This would be a guide for adding your own music. If you click on
              this button, it will lead you to the page for posting your own
              music. If you are not logged in, it should request that you log in
              as it would be foolish to allow anything if you are not logged in.
            </div>
            <div className={classes.linkDivs}>
              <Link to="/addingPage">
                <div className={classes.optBtn}>Button</div>
              </Link>
            </div>
          </div>
          <div className={classes.addPlaylist}>
            <div className={classes.optTitle}>Edit your songs.</div>
            <div>
              This is still a new feature, and I have no clue what I would put
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

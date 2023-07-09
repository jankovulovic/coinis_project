import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AlbumCard from "../Album/AlbumCard";
import classes from "./BigList.module.css";

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
        <div className={classes.quoteTitle}>Most Popular Artists</div>
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
      </div>
    </>
  );
};

export default BigList;

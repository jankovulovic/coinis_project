import { useEffect, useState } from "react";
// import AlphabetArray from "../Filters/AlphabetArray";
// import RatingFilter from "../Filters/RatingFilter";
import SearchBar from "../Filters/SearchBar";
import classes from "./SearchPage.module.css";
import AuthorCard from "../Filters/AuthorCard";
import Song from "../Filters/Song";
import axios from "axios";

const SearchPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [data, setData] = useState([]);

  // const [orderByFilter, setOrderByFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl;

      if (selectedFilter === "Authors") {
        apiUrl = "http://127.0.0.1:8000/api/v2/songs/authors/0/?page_size=10";
      } else if (selectedFilter === "Songs") {
        apiUrl = "http://127.0.0.1:8000/api/v2/songs/0/?page_size=10";
      }

      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        console.log(apiUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedFilter]);

  return (
    <div className={classes.filterContainer}>
      <div className={classes.mainTitle}>Search</div>
      <div className={classes.mainOptDiv}>
        <div
          className={`${classes.mainOptOne} ${
            selectedFilter === "Authors" ? classes.active : ""
          }`}
          onClick={() => setSelectedFilter("Authors")}
        >
          Authors
        </div>
        <div
          className={`${classes.mainOptTwo} ${
            selectedFilter === "Songs" ? classes.active : ""
          }`}
          onClick={() => setSelectedFilter("Songs")}
        >
          Songs
        </div>
      </div>

      <div>
        <SearchBar />
      </div>

      {/* <div className={classes.filters}>
        <div className={classes.result}>330 Results for "???"</div>
        <div className={classes.filterOptions}>
          <div>Order by:</div>
          <button
            className={orderByFilter === "A-Z" ? classes.active : ""}
            onClick={() => handleOrderByFilterClick("A-Z")}
          >
            A-Z
          </button>
          <button
            className={orderByFilter === "Rating" ? classes.active : ""}
            onClick={() => handleOrderByFilterClick("Rating")}
          >
            Rating
          </button>
          <button
            className={orderByFilter === "Favorites" ? classes.active : ""}
            onClick={() => handleOrderByFilterClick("Favorites")}
          >
            Favorites
          </button>
          <button
            className={orderByFilter === "" ? classes.actives : ""}
            onClick={() => handleOrderByFilterClick("")}
          >
            Remove all filters
          </button>
        </div>
      </div> */}

      {/* <div>
        {orderByFilter === "A-Z" && <AlphabetArray />}
        {orderByFilter === "Rating" && <RatingFilter />}
      </div> */}

      {selectedFilter === "Authors" && (
        <div>
          <div className={classes.listName}>Authors</div>
          <div className={classes.cardFlex}>
            {data.map((item) => (
              <AuthorCard
                key={item.author_id}
                imgLink={item.link}
                name={item.name}
              />
            ))}
          </div>
        </div>
      )}

      {selectedFilter === "Songs" && (
        <div>
          <div className={classes.listName}>Songs</div>
          <div className={classes.songFlex}>
            {data.map((item) => (
              <Song
                key={item.song_id}
                authorName={item.author_name}
                songTitle={item.title}
                authorImg={item.author_link}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

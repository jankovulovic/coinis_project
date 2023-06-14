import { useEffect, useState } from "react";
import AlphabetArray from "../Filters/AlphabetArray";
import RatingFilter from "../Filters/RatingFilter";
import SearchBar from "../Filters/SearchBar";
import classes from "./SearchPage.module.css";
import AuthorCard from "../Filters/AuthorCard";
import Song from "../Filters/Song";

const SearchPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [orderByFilter, setOrderByFilter] = useState("");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleOrderByFilterClick = (filter) => {
    setOrderByFilter(filter);
  };

  useEffect(() => {
    setSelectedFilter("Authors"); // Set "Authors" as the initial active filter
  }, []);

  return (
    <div className={classes.filterContainer}>
      <div className={classes.mainTitle}>Search</div>
      <div className={classes.mainOptDiv}>
        <div
          className={`${classes.mainOptOne} ${
            selectedFilter === "Authors" ? classes.active : ""
          }`}
          onClick={() => handleFilterClick("Authors")}
        >
          Authors
        </div>
        <div
          className={`${classes.mainOptTwo} ${
            selectedFilter === "Songs" ? classes.active : ""
          }`}
          onClick={() => handleFilterClick("Songs")}
        >
          Songs
        </div>
      </div>

      <div>
        <SearchBar />
      </div>

      <div className={classes.filters}>
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
      </div>

      <div>
        {orderByFilter === "A-Z" && <AlphabetArray />}
        {orderByFilter === "Rating" && <RatingFilter />}
      </div>

      {selectedFilter === "Authors" && (
        <div>
          <div className={classes.listName}>Authors</div>
          <div className={classes.cardFlex}>
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
          </div>
        </div>
      )}
      {selectedFilter === "Songs" && (
        <div>
          <div className={classes.listName}>Songs</div>
          <div className={classes.songFlex}>
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

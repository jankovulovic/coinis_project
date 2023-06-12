import { useState } from "react";
import AlphabetArray from "../Filters/AlphabetArray";
import RatingFilter from "../Filters/RatingFilter";
import SearchBar from "../Filters/SearchBar";
import classes from "./SearchPage.module.css";

const SearchPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={classes.filterContainer}>
      <div>
        <SearchBar />
      </div>
      <div className={classes.filters}>
        <div className={classes.result}>330 Results for "???" </div>
        <div className={classes.filterOptions}>
          <div>Order by:</div>
          <button
            className={selectedFilter === "A-Z" ? classes.active : ""}
            onClick={() => handleFilterClick("A-Z")}
          >
            A-Z
          </button>
          <button
            className={selectedFilter === "Rating" ? classes.active : ""}
            onClick={() => handleFilterClick("Rating")}
          >
            Rating
          </button>
          <button
            className={selectedFilter === "Favorites" ? classes.active : ""}
            onClick={() => handleFilterClick("Favorites")}
          >
            Favorites
          </button>
          <button
            className={selectedFilter === "" ? classes.actives : ""}
            onClick={() => handleFilterClick("")}
          >
            Remove all filters
          </button>
        </div>
      </div>
      <div>
        {selectedFilter === "A-Z" && <AlphabetArray />}
        {selectedFilter === "Rating" && <RatingFilter />}
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchPage;

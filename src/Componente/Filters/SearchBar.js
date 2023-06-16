import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    setSearchTerm("");
  };

  return (
    <form className={classes.formFlex} onSubmit={handleSubmit}>
      <div className={classes.searchDiv}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className={classes.searchBar}
        />
        <button className={classes.searchIcon} type="submit">
          <SearchIcon />
        </button>
      </div>
      <button className={classes.advanceSearchBtn}>Advance</button>
    </form>
  );
};

export default SearchBar;

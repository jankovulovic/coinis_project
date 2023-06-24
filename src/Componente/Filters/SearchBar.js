import React, { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [authors, setAuthors] = useState([]);

  const API_URL = "http://127.0.0.1:8000";
  const API_VERSION = "/api/v2/";

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    //for variable searchTerm i need to change spaces(_) to (%20) and then just pass it to API Led+zepelin = Led & Zepelin
  };

  useEffect(() => {
    axios
      .get(
        API_URL +
          API_VERSION +
          `songs/authors/0/?page_size=10&search=${searchTerm}`
      )
      .then((response) => {
        const datas = response.data;
        setAuthors(datas);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

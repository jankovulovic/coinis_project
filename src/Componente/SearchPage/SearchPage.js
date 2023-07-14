import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import AuthorCard from "../SearchResults/AuthorCard";
import Song from "../SearchResults/Song";
import SearchIcon from "@mui/icons-material/Search";
import { API_URL, API_VERSION } from "../../Variables/Config";
import GenericAuthorImage from "../../Assets/ArtistImage.avif";

import classes from "./SearchPage.module.css";

const AUTHORS_API = API_URL + API_VERSION + "songs/authors/0/?page_size=1000";
const SONGS_API = API_URL + API_VERSION + "songs/0/?page_size=1000";

const SearchPage = () => {
  const [authors, setAuthors] = useState([]);
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Authors");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(
    (url) => {
      setIsLoading(true);

      axios
        .get(url)
        .then((response) => {
          if (response.data) {
            if (filterType === "Authors") {
              setAuthors(response.data);
              setIsLoading(false);
            } else if (filterType === "Songs") {
              setSongs(response.data);
              setIsLoading(false);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    },
    [filterType]
  );

  useEffect(() => {
    if (filterType === "Authors") {
      fetchData(AUTHORS_API);
    } else if (filterType === "Songs") {
      fetchData(SONGS_API);
    }
  }, [filterType, fetchData]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (filterType === "Authors") {
      const url = `${AUTHORS_API}&search=${searchTerm}`;
      fetchData(url);
    } else if (filterType === "Songs") {
      const url = `${SONGS_API}&search=${searchTerm}`;
      fetchData(url);
    }
  };

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    setSearchTerm("");
  };

  return (
    <div className={classes.filterContainer}>
      <div className={classes.mainTitle}>Search</div>
      <div className={classes.mainOptDiv}>
        <div
          className={`${classes.mainOptOne} ${
            filterType === "Authors" ? classes.active : ""
          }`}
          onClick={() => handleFilterChange("Authors")}
        >
          Authors
        </div>
        <div
          className={`${classes.mainOptTwo} ${
            filterType === "Songs" ? classes.active : ""
          }`}
          onClick={() => handleFilterChange("Songs")}
        >
          Songs
        </div>
      </div>

      <form className={classes.formFlex} onSubmit={handleSearch}>
        <div className={classes.searchDiv}>
          <input
            className={classes.searchBar}
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search..."
          />

          <button className={classes.searchIcon} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : filterType === "Authors" ? (
        <div>
          <div className={classes.listName}>Authors</div>
          <div className={classes.cardFlex}>
            {authors.map((author) => (
              <AuthorCard
                key={author.author_id}
                imgLink={author.link || GenericAuthorImage} 
                authorName={author.name}
                authorId={author.author_id}
              />
            ))}
          </div>
        </div>
      ) : filterType === "Songs" ? (
        <div>
          <div className={classes.listName}>Songs</div>
          <div className={classes.songFlex}>
            {songs.map((song) => (
              <Song
                key={song.song_id}
                authorName={song.author_name}
                songTitle={song.title}
                authorImg={song.author_link || GenericAuthorImage} 
                songId={song.song_id}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchPage;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AuthorSelect from "./AuthorSelect";
import NewAuthorForm from "./NewAuthorForm";
import { API_URL, API_VERSION, chords } from "../../Variables/Config";

import classes from "./SongForm.module.css";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [authorLink, setAuthorLink] = useState("");
  const [authors, setAuthors] = useState([]);
  const [newAuthorName, setNewAuthorName] = useState("");
  const [newAuthorLink, setNewAuthorLink] = useState("");
  const [isAddingAuthor, setIsAddingAuthor] = useState(false);
  const [isSongCreationAllowed, setIsSongCreationAllowed] = useState(false);
  const [songText, setSongText] = useState("");
  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    fetchAuthors();
  }, []);

  useEffect(() => {
    setIsSongCreationAllowed(!!(title && authorId));
  }, [title, authorId]);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(
        API_URL + API_VERSION + `songs/authors/0/?page_size=1000`
      );
      const data = response.data;
      setAuthors(data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const handleAuthorChange = (e) => {
    setAuthorId(e.target.value);
    const selectedAuthor = authors.find(
      (author) => author.author_id === parseInt(e.target.value)
    );
    if (selectedAuthor) {
      if (e.target.value !== "new") {
        setAuthorLink(selectedAuthor.link);
      } else {
        setAuthorLink("");
      }
    } else {
      setAuthorLink("");
    }
    setIsAddingAuthor(e.target.value === "new");
    setAuthorError("");
  };

  const handleNewAuthorNameChange = (e) => {
    setNewAuthorName(e.target.value);
  };

  const handleNewAuthorLinkChange = (e) => {
    setNewAuthorLink(e.target.value);
  };

  const handleNewAuthorSubmit = async () => {
    const data = {
      author_id: 0,
      name: newAuthorName,
      link: newAuthorLink,
    };

    try {
      const response = await axios.post(
        API_URL + API_VERSION + `songs/authors/0/`,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 201) {
        console.log("Author created successfully");
        fetchAuthors();
        setAuthorId(response.data.author_id.toString());
        setNewAuthorName("");
        setNewAuthorLink("");
        setIsAddingAuthor(false);
        setIsSongCreationAllowed(!!(title && response.data.author_id));
      } else {
        console.error("Failed to create author");
      }
    } catch (error) {
      console.error("Error creating author:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !/^[a-zA-Z0-9\s]+$/.test(title)) {
      setTitleError(
        "Please enter a valid title with letters, numbers, and spaces only."
      );
      return;
    } else {
      setTitleError("");
    }

    const currentDate = new Date().toISOString();

    let selectedAuthor;
    if (authorId === "new") {
      selectedAuthor = authors.find(
        (author) => author.author_id === parseInt(authorId)
      );
      if (
        !selectedAuthor ||
        !newAuthorName ||
        !/^[a-zA-Z0-9]+$/.test(newAuthorName)
      ) {
        setAuthorError(
          "Please enter a valid author name with letters and numbers only."
        );
        return;
      } else {
        setAuthorError("");
      }
    } else {
      selectedAuthor = authors.find(
        (author) => author.author_id === parseInt(authorId)
      );
      if (!selectedAuthor) {
        setAuthorError("Please select an author.");
        return;
      } else {
        setAuthorError("");
      }
    }

    const userId = localStorage.getItem("userId");

    const data = {
      title,
      author_id: selectedAuthor.author_id,
      date_creation: currentDate,
      link: selectedAuthor.link,
      text_with_accords: songText,
      user_id: userId,
    };

    try {
      const response = await axios.post(
        API_URL + API_VERSION + `songs/0/`,
        data,
        {
          // headers: {
          //   'Content-Type': 'application/json', // Set the content type to JSON
          //   'Access-Control-Allow-Origin': '*', // Allow requests from any origin
          //   'Access-Control-Allow-Methods': 'POST', // Allow POST requests
          // },}
        }
      );

      if (response.status === 201) {
        console.log("Song created successfully");
        setTitle("");
        setAuthorId("");
        setNewAuthorName("");
        setNewAuthorLink("");
        setSongText("");
        setIsAddingAuthor(false);
        setIsSongCreationAllowed(false);
        window.location.href = "/";
      } else {
        console.error("Failed to create song");
      }
    } catch (error) {
      console.error("Error creating song:", error);
    }
  };

  const chordsByLetter = {};
  chords.forEach((chord) => {
    const letter = chord[0].toUpperCase();
    if (!chordsByLetter[letter]) {
      chordsByLetter[letter] = [];
    }
    chordsByLetter[letter].push(chord);
  });

  const chordButtons = Object.entries(chordsByLetter).map(
    ([letter, chordList]) => (
      <div key={letter}>
        <h3>{letter}</h3>
        {chordList.map((chord) => (
          <button
            type="button"
            key={chord}
            onClick={() => handleChordSelection(chord)}
          >
            {chord}
          </button>
        ))}
      </div>
    )
  );

  const handleChordSelection = (chord) => {
    setSongText((prevSongText) => prevSongText + chord + " ");
    textareaRef.current.focus();
  };

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  return (
    <>
      <div>
        <div className={classes.guideTitle}>
          Guide for adding your own music
        </div>
        <ol className={classes.guideList}>
          <li className={classes.guideItem}>Enter the title of the song.</li>
          <li className={classes.guideItem}>
            Select the author from the dropdown list.
          </li>
          <li className={classes.guideItem}>
            If the author is not listed, fill in the details in the form that
            appears.
          </li>
          <li className={classes.guideItem}>
            If adding chords, enter the chords followed by a space, then the
            corresponding line of text.
          </li>
          {/* <img /> */}
          <li className={classes.guideItem}>
            Repeat step 4 for each line of the song.
          </li>
          <li className={classes.guideItem}>
            Click "Create Song" to submit the form and create the song.
          </li>
        </ol>
      </div>
      <form
        className={classes.container}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className={classes.songInputs}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          {titleError && <p className={classes.error}>{titleError}</p>}
        </div>
        <div className={classes.newAuthorDiv}>
          <label htmlFor="author">Author:</label>
          <AuthorSelect
            authors={authors}
            authorId={authorId}
            handleAuthorChange={handleAuthorChange}
          />
          {authorId === "new" && isAddingAuthor && (
            <NewAuthorForm
              newAuthorName={newAuthorName}
              newAuthorLink={newAuthorLink}
              handleNewAuthorNameChange={handleNewAuthorNameChange}
              handleNewAuthorLinkChange={handleNewAuthorLinkChange}
              handleNewAuthorSubmit={handleNewAuthorSubmit}
              isAddingAuthor={isAddingAuthor}
            />
          )}
          {authorError && <p className={classes.error}>{authorError}</p>}
        </div>
        {authorId !== "" && authorId !== "new" && (
          <div className={classes.songInputs}>
            <label>Author Image Link:</label>
            <input type="text" value={authorLink} disabled />
          </div>
        )}
        <div className={classes.bigTitle}>Text with Chords</div>
        <div className={classes.chordAndText}>
          <div className={classes.chordsList}>{chordButtons}</div>
          <div className={classes.textInputDiv}>
            <textarea
              id="songText"
              ref={textareaRef}
              value={songText}
              onChange={(e) => setSongText(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.submitSongBtn}>
          <button type="submit" disabled={!isSongCreationAllowed}>
            Create Song
          </button>
        </div>
      </form>
    </>
  );
};

export default SongForm;

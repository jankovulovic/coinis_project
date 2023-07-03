import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthorSelect from "./AuthorSelect";
import NewAuthorForm from "./NewAuthorForm";
import classes from "./AddingPage.module.css";

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

  useEffect(() => {
    fetchAuthors();
  }, []);

  useEffect(() => {
    setIsSongCreationAllowed(!!(title && authorId));
  }, [title, authorId]);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v2/songs/authors/0/?page_size=1000"
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
      setAuthorLink(selectedAuthor.link);
    }
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
        "http://127.0.0.1:8000/api/v2/songs/authors/0/",
        data
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

    const currentDate = new Date().toISOString();

    let selectedAuthor;
    if (authorId === "new") {
      selectedAuthor = authors.find(
        (author) => author.author_id === parseInt(authorId)
      );
    } else {
      selectedAuthor = authors.find(
        (author) => author.author_id === parseInt(authorId)
      );
    }

    const data = {
      title,
      author_id: selectedAuthor.author_id,
      date_creation: currentDate,
      link: selectedAuthor.link,
      text_with_accords: songText,
      user_id: 1,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/songs/0/",
        data
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
      } else {
        console.error("Failed to create song");
      }
    } catch (error) {
      console.error("Error creating song:", error);
    }
  };

  const handleAddNewAuthor = () => {
    setIsAddingAuthor(true);
    setIsSongCreationAllowed(false);
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
            If the author is not listed, click "Add New Author" and fill in the
            details in the form that appears.
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
        autocomplete="off"
      >
        <div className={classes.songInputs}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
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
            />
          )}
          {authorId === "new" && !isAddingAuthor && (
            <button
              type="button"
              onClick={handleAddNewAuthor}
              className={classes.addNewAuthorButton}
            >
              Add New Author
            </button>
          )}
        </div>
        {authorLink && (
          <div className={classes.songInputs}>
            <label>Author Image Link:</label>
            <input type="text" value={authorLink} disabled />
          </div>
        )}
        <div className={classes.textInputDiv}>
          <label htmlFor="songText">Song Text:</label>
          <textarea
            id="songText"
            value={songText}
            onChange={(e) => setSongText(e.target.value)}
            required
          />
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

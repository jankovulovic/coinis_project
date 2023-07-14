import React, { useState } from "react";
import classes from "./SongForm.module.css";

const NewAuthorForm = ({
  newAuthorName,
  newAuthorLink,
  handleNewAuthorNameChange,
  handleNewAuthorLinkChange,
  handleNewAuthorSubmit,
  isAddingAuthor,
}) => {
  const [authorNameError, setAuthorNameError] = useState("");
  const [imageLinkError, setImageLinkError] = useState("");

  const validateAuthorName = (value) => {
    if (isAddingAuthor) {
      if (!value) {
        setAuthorNameError("Please enter an author name.");
      } else if (!/^[a-zA-Z0-9 ]+$/.test(value)) {
        setAuthorNameError(
          "Please enter a valid author name with letters, numbers, and spaces only."
        );
      } else {
        setAuthorNameError("");
      }
    } else {
      setAuthorNameError("");
    }
  };

  const validateImageLink = (value) => {
    if (isAddingAuthor) {
      if (!value) {
        setImageLinkError("Please enter an image link.");
      } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
        setImageLinkError("Please enter a valid image link.");
      } else {
        setImageLinkError("");
      }
    } else {
      setImageLinkError("");
    }
  };

  const handleAuthorNameChange = (e) => {
    const { value } = e.target;
    validateAuthorName(value);
    handleNewAuthorNameChange(e);
  };

  const handleImageLinkChange = (e) => {
    const { value } = e.target;
    validateImageLink(value);
    handleNewAuthorLinkChange(e);
  };

  const handleSubmit = () => {
    validateAuthorName(newAuthorName);
    validateImageLink(newAuthorLink);

    if (authorNameError || imageLinkError) {
      return;
    }

    handleNewAuthorSubmit();
  };

  return (
    <div className={classes.newAuthor}>
      <div className={classes.newAuthorInputs}>
        <label htmlFor="newAuthorName">Author Name:</label>
        <input
          type="text"
          id="newAuthorName"
          value={newAuthorName || ""}
          onChange={handleAuthorNameChange}
          required
        />
        {isAddingAuthor && authorNameError && (
          <p className={classes.errorAuthor}>{authorNameError}</p>
        )}
      </div>
      <div className={classes.newAuthorInputs}>
        <label htmlFor="newAuthorLink">Image Link:</label>
        <input
          type="text"
          id="newAuthorLink"
          value={newAuthorLink || ""}
          onChange={handleImageLinkChange}
          required
        />
        {isAddingAuthor && imageLinkError && (
          <p className={classes.errorAuthor}>{imageLinkError}</p>
        )}
      </div>
      <button type="button" onClick={handleSubmit}>
        Create New Author
      </button>
    </div>
  );
};

export default NewAuthorForm;

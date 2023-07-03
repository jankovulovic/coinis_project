import React from "react";
import classes from "./AddingPage.module.css";

const NewAuthorForm = ({
  newAuthorName,
  newAuthorLink,
  handleNewAuthorNameChange,
  handleNewAuthorLinkChange,
  handleNewAuthorSubmit,
}) => {
  return (
    <div className={classes.newAuthor}>
      <div className={classes.newAuthorInputs}>
        <label htmlFor="newAuthorName">Author Name:</label>
        <input
          type="text"
          id="newAuthorName"
          value={newAuthorName}
          onChange={handleNewAuthorNameChange}
          required
        />
      </div>
      <div className={classes.newAuthorInputs}>
        <label htmlFor="newAuthorLink">Image Link:</label>
        <input
          type="text"
          id="newAuthorLink"
          value={newAuthorLink}
          onChange={handleNewAuthorLinkChange}
          required
        />
      </div>
      <button type="button" onClick={handleNewAuthorSubmit}>
        Create New Author
      </button>
    </div>
  );
};

export default NewAuthorForm;

import React from "react";
import classes from "./SongForm.module.css";

const AuthorSelect = ({ authors, authorId, handleAuthorChange }) => {
  return (
    <select
      className={classes.authorSelect}
      id="author"
      value={authorId}
      onChange={handleAuthorChange}
      required
    >
      <option value="">Select an author</option>
      <option value="new">Add New Author</option>
      {authors.map((author) => (
        <option key={author.author_id} value={author.author_id}>
          {author.name}
        </option>
      ))}
    </select>
  );
};

export default AuthorSelect;

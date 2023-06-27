import React, { useState, useEffect } from "react";
import axios from "axios";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [authorLink, setAuthorLink] = useState("");
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
  const [newAuthorName, setNewAuthorName] = useState("");
  const [newAuthorLink, setNewAuthorLink] = useState("");
  const [isAddingAuthor, setIsAddingAuthor] = useState(false);
  const [isSongCreationAllowed, setIsSongCreationAllowed] = useState(false);

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

  const handleNewAuthorSubmit = async (e) => {
    e.preventDefault();

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
        // Fetch updated authors list after creating a new author
        fetchAuthors();
        setAuthorId(response.data.author_id.toString());
        setNewAuthor("");
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
      // If 'new' author option is selected, use the newly created author
      selectedAuthor = authors.find(
        (author) => author.author_id === parseInt(authorId)
      );
    } else {
      // Otherwise, find the selected author from the authors array
      selectedAuthor = authors.find(
        (author) => author.author_id === parseInt(authorId)
      );
    }

    const data = {
      title,
      author_id: selectedAuthor.author_id,
      date_creation: currentDate,
      link: selectedAuthor.link,
      text_with_accords: "",
      user_id: 1,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/songs/0/",
        data
      );

      if (response.status === 201) {
        console.log("Song created successfully");
        // Reset form fields
        setTitle("");
        setAuthorId("");
        setNewAuthor("");
        setNewAuthorName("");
        setNewAuthorLink("");
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <select
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
        {authorId === "new" && isAddingAuthor && (
          <div>
            <div>
              <label htmlFor="newAuthorName">Name:</label>
              <input
                type="text"
                id="newAuthorName"
                value={newAuthorName}
                onChange={(e) => setNewAuthorName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="newAuthorLink">Link:</label>
              <input
                type="text"
                id="newAuthorLink"
                value={newAuthorLink}
                onChange={(e) => setNewAuthorLink(e.target.value)}
                required
              />
            </div>
            <button type="button" onClick={handleNewAuthorSubmit}>
              Create New Author
            </button>
          </div>
        )}
        {authorId === "new" && !isAddingAuthor && (
          <button type="button" onClick={handleAddNewAuthor}>
            Add New Author
          </button>
        )}
      </div>
      {authorLink && (
        <div>
          <label>Author Link:</label>
          <input type="text" value={authorLink} disabled />
        </div>
      )}
      <div>
        <button type="submit" disabled={!isSongCreationAllowed}>
          Create Song
        </button>
      </div>
    </form>
  );
};

export default SongForm;

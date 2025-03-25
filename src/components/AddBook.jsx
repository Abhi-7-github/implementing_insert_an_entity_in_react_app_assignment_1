// src/components/AddBook.jsx
import React, { useState } from 'react';

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookDetails); // For now, it just logs the details (can later be used to save to a server or local storage)
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookDetails.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="coverImage">Cover Image URL:</label>
          <input
            type="url"
            id="coverImage"
            name="coverImage"
            value={bookDetails.coverImage}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;

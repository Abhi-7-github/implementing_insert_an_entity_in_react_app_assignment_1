// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import BookCard from "./components/BookCard";  // Assuming the path to BookCard is correct
import books from "../src/booksData";  // Data file containing the list of books
import "./Home.css";  // Import the CSS for styling
import { useNavigate } from "react-router-dom";

const Home = () => {

const nav=useNavigate()

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      {/* "Add Book" button that links to /add-book */}
      <Link to="/add-book">
        <button onClick={()=>{nav("/add-book")}} className="add-book-btn">Add Book</button>
      </Link>
      
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
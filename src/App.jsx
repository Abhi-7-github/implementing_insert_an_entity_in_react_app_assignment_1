// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Home';
import AddBook from './components/AddBook';
import './App.css'; // Global styles
import BookCard from './components/BookCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<BookCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
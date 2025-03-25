// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Home';
import AddBooks from './components/AddBooks';
import './App.css'; // Global styles
import BookCard from './components/BookCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
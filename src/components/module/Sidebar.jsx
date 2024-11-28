// Sidebar.jsx
import React from 'react';
import '../module/Sidebar.css';
import { Link } from 'react-router-dom';
import "../games/crosswordgame"
import "../games/BlogCard"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Inside this Module:</h2>
      <ul>
        <li>
          <Link to="/module">About</Link>
        </li>
        <li>
          <Link to="/video">Video lectures</Link>
        </li>
        <li>
          <Link to="/Quizpage">Quizzes</Link>
        </li>
        <li>
          <Link to="/crossword">Crosswords</Link>
        </li>
        <li>
          <Link to="/scenarios">Scenarios</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

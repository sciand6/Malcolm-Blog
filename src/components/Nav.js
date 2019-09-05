import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/posts">
            <li>Posts</li>
          </Link>
          <li className="navHeader">Malcolm's Blog: Tech | Growth</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
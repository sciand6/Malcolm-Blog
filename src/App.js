import React from 'react';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">My Portfolio</a></li>
        </ul>
      </div>
      <Posts />
    </div>
  );
}

export default App;

import React from 'react';
import Posts from './components/Posts';
import Nav from './components/Nav';
import PostDisplay from './components/PostDisplay';
import PostingPage from './components/Posting.page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Posts" exact component={Posts}/>
          <Route path="/Posts/:id" component={PostDisplay}/>
          <Route path="/PostingPage" component={PostingPage}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <h1>Click "Posts" to check out my latest content.</h1>
  );
}

export default App;

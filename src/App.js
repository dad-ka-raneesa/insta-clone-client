import React from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/createPost'>
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;

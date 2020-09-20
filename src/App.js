import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import { useHistory, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import postData from './components/postData';


function App() {
  const handleSignup = (history, body) => postData({ type: 'SIGNUP', body, url: '/signin' }, history);
  const handleSignin = (history, body) => postData({ type: 'SIGNIN', body, url: '/', message: 'Signed in successfully' }, history);

  useEffect(() => {
    postData({ body: {} });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <Signin onSubmit={handleSignin} />
      </Route>
      <Route path='/signup'>
        <Signup onSubmit={handleSignup} />
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

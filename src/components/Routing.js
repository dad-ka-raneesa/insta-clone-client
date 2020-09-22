import React, { useEffect, useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import CreatePost from './screens/CreatePost';
import { UserContext } from '../App.js';

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push('/signin');
    }
  }, [])

  return (
    <Switch>
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
    </Switch>
  );
}

export default Routing;
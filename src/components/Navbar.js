import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App.js';

const NavBar = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  const homeBarBeforeLogin = () => {
    return (
      <ul id="nav-mobile" className="right">
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    );
  }

  const homeBarAfterLogin = () => {
    return (
      <ul id="nav-mobile" className="right">
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/createPost">Create Post</Link></li>,
        <li><Link to="/followingPosts">My Following Posts</Link></li>,
        <li>
          <button
            className="btn #e64a19 deep-orange darken-2"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push('/signin');
            }}>LOGOUT</button>
        </li>
      </ul>
    );
  }

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? '/' : '/signin'} className="brand-logo left">Instagram</Link>
        {state ? homeBarAfterLogin() : homeBarBeforeLogin()}
      </div>
    </nav>
  );
}

export default NavBar;
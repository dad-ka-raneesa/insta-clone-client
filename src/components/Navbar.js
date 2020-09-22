import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App.js';

const NavBar = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <li key='profile'><Link to="/profile">Profile</Link></li>,
        <li key="createPost" ><Link to="/createPost">CreatePost</Link></li>,
        <li key="logout">
          <button
            className="btn #e64a19 deep-orange darken-2"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push('/signin');
            }}>LOGOUT</button>
        </li>
      ];
    }
    else {
      return [
        <li key="signin"><Link to="/signin">Signin</Link></li>,
        <li key='signup'><Link to="/signup">Signup</Link></li>
      ];
    }
  }
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? '/' : '/signin'} className="brand-logo left">Instagram</Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
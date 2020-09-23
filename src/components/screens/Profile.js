import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import Gallery from '../Gallery';
import apiCall from '../apiCall';

const Profile = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    apiCall({ type: 'MY_POSTS', headers })
      .then(result => {
        setData(result.myPosts);
      });
  }, [])

  return (
    <div className='profile'>
      <div className='profile-container'>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU"
          />
        </div>
        <div>
          <h4>{state ? state.name : 'Loading...'}</h4>
          <h6>{state ? state.email : 'Loading...'}</h6>
          <div className='info-tab'>
            <h6>{data.length} Posts</h6>
            <h6>{state ? state.followers.length : 0} Followers</h6>
            <h6>{state ? state.following.length : 0} Following</h6>
          </div>
        </div>
      </div>
      <Gallery posts={data} />
    </div>
  );
}

export default Profile;
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
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
          <h4>{state ? state.name : 'Loading'}</h4>
          <div className='info-tab'>
            <h6>20 Posts</h6>
            <h6>10 Followers</h6>
            <h6>5 Following</h6>
          </div>
        </div>
      </div>
      <div className='gallery'>
        {data.map(item => (
          <img key={item._id} className='item' src={item.photo} alt='Loading' />
        ))}
      </div>
    </div>
  );
}

export default Profile;
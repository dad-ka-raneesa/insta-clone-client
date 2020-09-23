import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiCall from '../apiCall';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    apiCall({ type: 'USER_PROFILE', userId, headers })
      .then(result => {
        setUserProfile(result);
      });
  }, [])

  return (
    <>
      {userProfile ?
        <div className='profile'>
          <div className='profile-container'>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU"
              />
            </div>
            <div>
              <h4>{userProfile.user.name}</h4>
              <h5>{userProfile.user.email}</h5>
              <div className='info-tab'>
                <h6>{userProfile.posts.length} Posts</h6>
                <h6>10 Followers</h6>
                <h6>5 Following</h6>
              </div>
            </div>
          </div>
          <div className='gallery'>
            {userProfile.posts.map(item => (
              <img key={item._id} className='item' src={item.photo} alt='Loading' />
            ))}
          </div>
        </div>
        : <h2>Loading...</h2>
      }
    </>
  );
}

export default UserProfile;
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import apiCall from '../apiCall';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [showFollow, setShowFollow] = useState(true);
  const { state, dispatch } = useContext(UserContext);
  const { userId } = useParams();

  useEffect(() => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    apiCall({ type: 'USER_PROFILE', userId, headers })
      .then(data => {
        setUserProfile(data);
      });
  }, [])

  const updateDetails = (loggedInUser, otherUser) => {
    dispatch({ type: 'UPDATE', payload: { following: loggedInUser.following, followers: loggedInUser.followers } });
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUserProfile(prevState => {
      return {
        ...prevState,
        user: otherUser
      }
    })
  }

  const followUser = () => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    apiCall({ type: 'FOLLOW', body: { followId: userId }, headers })
      .then(({ followedUser, followingUser }) => {
        updateDetails(followingUser, followedUser);
        setShowFollow(false);
      });
  }

  const unFollowUser = () => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    apiCall({ type: 'UN_FOLLOW', body: { unFollowId: userId }, headers })
      .then(({ unFollowedUser, unFollowingUser }) => {
        updateDetails(unFollowingUser, unFollowedUser);
        setShowFollow(true);
      });
  }


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
                <h6>{userProfile.user.followers.length} Followers</h6>
                <h6>{userProfile.user.following.length} Following</h6>
              </div>
              {showFollow ?
                <button
                  className="btn #64b5f6 blue lighten-2 darken-1"
                  onClick={() => followUser()}>FOLLOW</button> :
                <button
                  className="btn #64b5f6 blue lighten-2 darken-1"
                  onClick={() => unFollowUser()}>UN FOLLOW</button>
              }
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
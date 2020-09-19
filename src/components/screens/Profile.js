import React from 'react';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU"
          />
        </div>
        <div>
          <h4>Isabella</h4>
          <div className='info-tab'>
            <h6>20 Posts</h6>
            <h6>10 Followers</h6>
            <h6>5 Following</h6>
          </div>
        </div>
      </div>
      <div className='gallery'>
        <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU' />
        <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU' />
        <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU' />
        <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU' />
        <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2DY2WktwMebkhOn7kGhkwXoxHa4EzrU9Nag&usqp=CAU' />
      </div>
    </div>
  );
}

export default Profile;
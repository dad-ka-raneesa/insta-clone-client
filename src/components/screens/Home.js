import React, { useState, useEffect } from 'react';
import Post from '../Post';
import apiCall from '../apiCall';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    apiCall({ type: 'ALL_POST', headers })
      .then(result => {
        setData(result.posts);
      })
  }, []);

  return (
    <div className='home'>
      {data.map(item => (
        <Post item={item} key={item._id} />
      ))}
    </div>
  )
}

export default Home;
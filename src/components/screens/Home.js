import React, { useState, useEffect, t } from 'react';
import Post from '../Post';
import apiCall from '../apiCall';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    apiCall({ type: 'ALL_POSTS', headers })
      .then(result => {
        setData(result.posts);
      })
  }, []);

  const postData = async ({ type, body }) => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    const result = await apiCall({ type, body, headers })
    const newData = data.map(item => {
      if (item._id === result._id) {
        return result;
      } else {
        return item;
      }
    })
    setData(newData);
  }

  const likePost = (id) => postData({ type: 'LIKE', body: { postId: id } });
  const unLikePost = (id) => postData({ type: 'UN_LIKE', body: { postId: id } });

  return (
    <div className='home'>
      {data.map(item => (
        <Post item={item} key={item._id} likePost={likePost} unLikePost={unLikePost} />
      ))}
    </div>
  )
}

export default Home;
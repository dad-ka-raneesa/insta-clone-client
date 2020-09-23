import React, { useState, useEffect} from 'react';
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

  const postDetails = async (action) => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    const result = await apiCall({ ...action, headers })
    const newData = data.map(item => {
      if (item._id === result._id) {
        return result;
      } else {
        return item;
      }
    })
    setData(newData);
  }

  const likePost = (id) => postDetails({ type: 'LIKE', body: { postId: id } });
  const unLikePost = (id) => postDetails({ type: 'UN_LIKE', body: { postId: id } });
  const makeComment = (text, id) => postDetails({ type: 'COMMENT', body: { text, postId: id } });
  const deletePost = async (id) => {
    const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
    const result = await apiCall({ type: 'DELETE_POST', postId: id, headers });
    const newData = data.filter(item => {
      return item._id !== result._id;
    })
    setData(newData);
  }

  return (
    <div className='home'>
      {data.map(item => (
        <Post item={item} key={item._id}
          likePost={likePost}
          unLikePost={unLikePost}
          makeComment={makeComment}
          deletePost={deletePost} />
      ))}
    </div>
  )
}

export default Home;
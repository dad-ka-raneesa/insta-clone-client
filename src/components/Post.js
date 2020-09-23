import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Post = (props) => {
  const { item, likePost, unLikePost, makeComment, deletePost } = props;
  const { state, dispatch } = useContext(UserContext);

  const getComments = () => {
    return item.comments.map((record, index) => (
      <h6 key={record.text + index}>
        <span className='postedBy'>{record.postedBy.name}</span>
        {record.text}</h6 >
    ))
  }

  return (
    <div className='card home-card'>
      <h5 className='username'><Link to={item.postedBy._id !== state._id ? '/userProfile/' + item.postedBy._id : '/profile'}>{item.postedBy.name}</Link>
        {item.postedBy._id === state._id &&
          <i className="material-icons delete_btn" onClick={() => deletePost(item._id)}> delete</i>}
      </h5>
      <div className='card-image'>
        <img src={item.photo} alt='Loading..' />
      </div>
      <div className='card-content'>
        <i className="material-icons favorite"> favorite</i>
        {item.likes.includes(state._id) ?
          <i className="material-icons thumb_btn" onClick={() => unLikePost(item._id)}>thumb_down</i> :
          <i className="material-icons thumb_btn" onClick={() => likePost(item._id)}>thumb_up</i>
        }
        <h6>{item.likes.length} likes</h6>
        <h6>{item.title}</h6>
        <p>{item.body}</p>
        {getComments()}
        <form onSubmit={(e) => {
          e.preventDefault();
          makeComment(e.target[0].value, item._id);
        }}>
          <input type='text' placeholder='add a comment'></input>
        </form>
      </div>
    </div >
  );
}

export default Post;
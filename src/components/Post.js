import React, { useContext } from 'react';
import { UserContext } from '../App';

const Post = (props) => {
  const { item, likePost, unLikePost } = props;
  const { state, dispatch } = useContext(UserContext);

  return (
    <div className='card home-card'>
      <h5>{item.postedBy.name}</h5>
      <div className='card-image'>
        <img src={item.photo} alt={item.photo} />
      </div>
      <div className='card-content'>
        <i className="material-icons" style={{ color: 'red' }}> favorite</i>
        {item.likes.includes(state._id) ?
          <i className="material-icons" onClick={() => unLikePost(item._id)}>thumb_down</i> :
          <i className="material-icons" onClick={() => likePost(item._id)}>thumb_up</i>
        }
        <h6>{item.likes.length} likes</h6>
        <h6>{item.title}</h6>
        <p>{item.body}</p>
        <input type='text' placeholder='add a comment'></input>
      </div>
    </div >
  );
}

export default Post;
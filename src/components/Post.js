import React, { useContext } from 'react';
import { UserContext } from '../App';

const Post = (props) => {
  const { item, likePost, unLikePost } = props;
  const { state, dispatch } = useContext(UserContext);

  const getComments = () => {
    console.log(item);
    return item.comments.map((record, index) => (
      <h6 key={record.text + index}><span style={{ fontWeight: '800', marginRight: '7px' }}>{record.postedBy.name}</span>{record.text}</h6 >
    ))
  }

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
        <h6 style={{ fontWeight: '600' }}>{item.title}</h6>
        <p>{item.body}</p>
        {getComments()}
        <form onSubmit={(e) => {
          e.preventDefault();
          props.makeComment(e.target[0].value, item._id);
        }}>
          <input type='text' placeholder='add a comment'></input>
        </form>
      </div>
    </div >
  );
}

export default Post;
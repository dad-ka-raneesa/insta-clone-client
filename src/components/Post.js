import React from 'react';

const Post = (props) => {
  const { item } = props;
  return (
    <div className='card home-card'>
      <h5>{item.postedBy.name}</h5>
      <div className='card-image'>
        <img src={item.photo} alt={item.photo} />
      </div>
      <div className='card-content'>
        <i className="material-icons">favorite</i>
        <h6>{item.title}</h6>
        <p>{item.body}</p>
        <input type='text' placeholder='add a comment'></input>
      </div>
    </div>
  );
}

export default Post;
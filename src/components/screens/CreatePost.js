import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <div className='card input-field create-post-card'>
      <input type='text' placeholder='title'></input>
      <input type='text' placeholder='body'></input>
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue lighten-2 darken-1">
          <span>UPLOAD IMAGE</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn #64b5f6 blue lighten-2 darken-1" >SUBMIT POST</button>
    </div>
  );
}

export default CreatePost;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputBar from '../InputBar';
import postData from '../postData';
import uploadImage from '../uploadImage';
import Button from '../Button';

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (url) {
      const headers = { "Authorization": "Bearer " + localStorage.getItem("jwt") };
      const action = { type: 'CREATE_POST', body: { title, body, photo: url }, headers, url: '/', message: 'Created post successfully' };
      postData(action, history);
    }
  }, [url])

  const handleCreatePost = async () => {
    const data = await uploadImage(image);
    setUrl(data.url);
  }

  return (
    <div className='card input-field create-post-card'>
      <InputBar type='text' placeholder='title' value={title} onChange={setTitle} />
      <InputBar type='text' placeholder='body' value={body} onChange={setBody} />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue lighten-2 darken-1">
          <span>UPLOAD IMAGE</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <Button text="SUBMIT POST" onClick={handleCreatePost} />
    </div>
  );
}

export default CreatePost;
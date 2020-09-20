import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import InputBar from '../InputBar';
import postData from '../postData';
const HandlePostData = (email, password, history) => {
  const action = { type: 'SIGNIN', body: { email, password } }
  postData(action, history, '/', 'Signed in successfully');
}


const Signin = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="basic-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <InputBar placeholder='email' value={email} onChange={setEmail} />
        <InputBar placeholder='password' value={password} onChange={setPassword} />
        <button
          className="btn #64b5f6 blue lighten-2 darken-1"
          onClick={() => HandlePostData(email, password, history)}>SIGNIN</button>
        <h5>
          <Link to='/signup'>Dont have an account ?</Link>
        </h5>
      </div>
    </div>
  );
}

export default Signin;
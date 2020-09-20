import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputBar from '../InputBar';
import postData from '../postData';

const HandlePostData = (name, email, password, history) => {
  const action = { type: 'SIGNUP', body: { name, email, password } };
  postData(action, history, '/signin')
}

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="basic-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <InputBar placeholder='name' value={name} onChange={setName} />
        <InputBar placeholder='email' value={email} onChange={setEmail} />
        <InputBar placeholder='password' value={password} onChange={setPassword} />
        <button
          className="btn #64b5f6 blue lighten-2 darken-1"
          onClick={() => HandlePostData(name, email, password, history)}>SIGNUP</button>
        <h5>
          <Link to='/signin'>Already have an account ?</Link>
        </h5>
      </div>
    </div>
  );
}

export default Signup;
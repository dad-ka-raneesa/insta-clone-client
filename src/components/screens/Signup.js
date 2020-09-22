import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputBar from '../InputBar';
import postData from '../postData';

const Signup = (props) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => postData({ type: 'SIGNUP', body: { name, email, password }, url: '/signin' }, history);

  return (
    <div className="basic-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <InputBar placeholder='name' value={name} onChange={setName} />
        <InputBar placeholder='email' value={email} onChange={setEmail} />
        <InputBar placeholder='password' value={password} onChange={setPassword} />
        <button
          className="btn #64b5f6 blue lighten-2 darken-1"
          onClick={() => handleSignup()}>SIGNUP</button>
        <h5>
          <Link to='/signin'>Already have an account ?</Link>
        </h5>
      </div>
    </div>
  );
}

export default Signup;
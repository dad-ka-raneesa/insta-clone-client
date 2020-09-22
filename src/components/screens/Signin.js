import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputBar from '../InputBar';
import { UserContext } from '../../App';
import apiCall from '../apiCall';
import M from 'materialize-css';

const Signin = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    const action = { type: 'SIGNIN', body: { email, password } };
    const data = await apiCall(action);
    if (data.error) {
      M.toast({ html: data.error, classes: '#e64a19 deep-orange darken-2' });
    }
    else {
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({ type: 'USER', payload: data.user });
      M.toast({ html: 'Signed in successfully', classes: '#388e3c green darken-2' });
      history.push('/');
    }
  };

  return (
    <div className="basic-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <InputBar placeholder='email' value={email} onChange={setEmail} />
        <InputBar placeholder='password' value={password} onChange={setPassword} />
        <button
          className="btn #64b5f6 blue lighten-2 darken-1"
          onClick={() => handleSignin()}>SIGNIN</button>
        <h5>
          <Link to='/signup'>Dont have an account ?</Link>
        </h5>
      </div>
    </div>
  );
}

export default Signin;
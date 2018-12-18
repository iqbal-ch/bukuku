import React from 'react';
import auth from "../service/auth";

import './Login.css'

const Login = props => {
  console.log(props)
  return (
    <div>
      <h1>Login Page</h1>
      <label>username or email :</label>
      <input></input>
      <label>password :</label>
      <input type='password'></input>
      <button onClick={() => { auth.login(() => {props.history.push("/")} ) }} >
        Login
      </button>
    </div>
  );
};
export default Login;


import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import {actionTryLogin}  from '../actions';

import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.isAuth) {
      this.props.history.push('/');
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
      e.preventDefault();
      this.props.tryLogin(this.state)
      // try {
      //   this.props.tryLogin(this.state)
      //   .then(() => {
      //       this.props.history.push('/');       
      //   });
      // }
      // catch(ex){
      //   //this.state.errorMsg = "Unable to connect to server";
      //   console.log("error", ex);
      // }
  }


  render() {
    if(this.props.isAuth)
      return <Redirect to="/" />
      
    return (
      <div className="wrapper">
        <h1>Login Page</h1>
        <form>
          <label className="label-login">username or email :</label>
          <input className="input-login" type="email" name="email" onChange={this.handleChange}></input>
          <label className="label-login" >password :</label>
          <input className="input-login" type='password' name="password" onChange={this.handleChange}></input>
          <button className="input-login btn-login" className="button" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { isAuth: state.user.isAuth }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tryLogin: (values) => { dispatch(actionTryLogin(values));}
  };
};

//export default Login;
export default connect(mapStateToProps,mapDispatchToProps)(Login);


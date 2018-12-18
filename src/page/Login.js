import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';

  
class Login extends Component {
state = { redirectToReferrer: false };

login = () => {
    this.props.authenticate(() => {
    this.setState({ redirectToReferrer: true });
    });
};
  
    render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    
    console.log(this.props)
    if (redirectToReferrer) return <Redirect to={from} />;
  
      return (
        <div>
          {/* <p>You must log in to view the page at {from.pathname}</p> */}
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }
  
export default Login;


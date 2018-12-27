import React, {Component} from 'react'
import { connect } from 'react-redux';

import {actionTryRegister} from '../actions'

class SignupPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            phone:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.tryRegister(this.state)
    }

    render() {
        return(
            <div>
                <h1>Signup Now !</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Email :</label>
                    <input type="email" name="email" onChange={this.onChange}/>
                    <label>Password :</label>
                    <input type="password" name="password" onChange={this.onChange}/>
                    <label>Name :</label>
                    <input type="text" name="name" onChange={this.onChange}/>
                    <label>Phone number :</label>
                    <input type="text" name="phone" onChange={this.onChange}/>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//   return { Messages: state.myMsg.message }
// };

const mapDispatchToProps = (dispatch) => {
    return {
      tryRegister: (values) => { dispatch(actionTryRegister(values));}
    };
  };
  
  //export default Login;
  export default connect(null, mapDispatchToProps)(SignupPage);

//export default SignupPage;
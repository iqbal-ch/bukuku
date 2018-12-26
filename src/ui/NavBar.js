import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

import {deleteUser}  from '../actions';
import { connect } from 'react-redux';

import './Navbar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    
    render (){
            return(
                <div position='absolute'>
                    <AppBar >
                        <div className="navbar">
                            <h4 className="logo">Bukuku</h4>
                            {/* <div className="search-input">
                                <input></input>
                                 <button>search</button>
                            </div> */}
                                <img active={this.props.isAuth}className="img-profil" alt="photo profil" src="https://lh3.googleusercontent.com/-r-J7b6Nd1W8/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcbACnEtjGHxbVvaUl3gB4vRqE9Vhw/s64-c-mo/photo.jpg"></img>
                                <button active={this.props.isAuth}className="button-left">Keranjang</button>
                                <button active={this.props.isAuth}className="button-left" onClick={this.props.deleteUser()}>logout</button>
                        {this.props.isAuth === false &&
                                <button className="button-left">login<Link to='/login'/></button>
                        }
                        </div>
                        <div className="navbar-bottom">
                            <div className="route-link">
                                <ul className="ul-nav">
                                    <li className="ul-nav"><Link to='/'>Home</Link></li>
                                    <li className="ul-nav"><Link to='/produk'>Produk</Link></li>
                                </ul> 
                            </div>
                        </div>
                    </AppBar>
                </div>
            )
        }
   

}

const mapStateToProps = (state) => {
    return { isAuth: state.user.isAuth }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: () => { dispatch(deleteUser());}
    };
  };
  
  //export default Login;
  export default connect(mapStateToProps,mapDispatchToProps)(NavBar);


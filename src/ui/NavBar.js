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
        console.log(this.props.isAuth);
        if(this.props.isAuth){
            return(
                <div position='absolute'>
                    <AppBar >
                        <div className="navbar">
                            <h4 className="logo">Bukuku</h4>
                            <div className="search-input">
                            <input></input>
                            <button>search</button>
                        </div>
                        <img className="img-profil" alt="photo profil" src="https://lh3.googleusercontent.com/-r-J7b6Nd1W8/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcbACnEtjGHxbVvaUl3gB4vRqE9Vhw/s64-c-mo/photo.jpg"></img>
                        <button className="button-left">Bantuan</button>
                        <button className="button-left">Keranjang</button>
                        <button className="button-left" onClick={this.props.deleteUser()}>logout</button>
                        </div>
                        <div className="navbar-bottom">
                            <div className="route-link">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/produk'>Produk</Link></li>
                                    <li><Link to='/produk/detail'>Detail</Link></li>
                                </ul> 
                            </div>
                        </div>
                    </AppBar>
                </div>
            )
        }else{
            return(
                <div position='absolute'>
                    <AppBar >
                        <div className="navbar">
                            <h4 className="logo">Bukuku</h4>
                            <div className="search-input">
                            <input></input>
                            <button>search</button>
                        </div>
                        <button className="button-left">login<Link to='/login'/></button>
                        </div>
                        <div className="navbar-bottom">
                            <div className="route-link">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/produk'>Produk</Link></li>
                                    <li><Link to='/produk/detail'>Detail</Link></li>
                                </ul> 
                            </div>
                        </div>
                    </AppBar>
                </div>
            )
        } 
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


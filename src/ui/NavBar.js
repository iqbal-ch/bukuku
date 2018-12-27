import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

import {deleteUser}  from '../actions';
import { connect } from 'react-redux';

import './Navbar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.state={
            isAuth:false
        }
        this.setAuth = this.setAuth.bind(this);
    }

    setAuth(e){
        e.preventDefault();
        this.setState({ isAuth: true});
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
                            {this.state.isAuth === true &&
                                <button className="button-left" onClick={this.props.deleteUser()}>logout</button>
                                
                            }
                            {this.state.isAuth === true &&
                                <button className="button-left">Keranjang</button>
                            }
                        {this.state.isAuth === false &&
                                
                                <Link className="button-link" to='/login'><button className="button-left">login</button></Link>
                        }
                        </div>
                        <div className="navbar-bottom">
                            <div className="route-link">
                                <ul className="ul-nav">
                                    <li className="ul-nav"><Link to='/'>Home</Link></li>
                                    <li className="ul-nav"><Link to='/produk'>Produk</Link></li>
                                    <li className="ul-nav"><Link to='/order'>order  </Link></li>
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


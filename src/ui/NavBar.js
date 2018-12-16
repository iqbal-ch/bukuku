import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';

import './Navbar.css';

const NavBar = () => {
    return(
        <div position='absolute'>
            <AppBar >
                <div className="navbar">
                    <h4>Bukuku</h4>
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

export default NavBar;


import React from 'react'

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

                </div>
            </AppBar>
        </div>
    )

}

export default NavBar;


import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'


import './Navbar.css';

const NavBar = () => {
    return(
        <div>
            <AppBar position='absolute'>
                <Toolbar className="navbar">
                    Bukuku
                    <div className="search">
                        <input className='input-search'></input>
                        <IconButton aria-label="Delete">
                            <SvgIcon>
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                            </SvgIcon>
                        </IconButton>
                        <img className="profil-image"></img>
                    </div>
                </Toolbar>
                <div className="navbar-bottom">

                </div>
            </AppBar>
        </div>
    )

}

export default NavBar;


import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';

import './Navbar.css';

const NavBar = () => {
    return(
        <div>
            <AppBar position='absolute'>
                <Toolbar className="navbar">
                    Bukuku
                    <div className="search">
                        <Input className='input-search'></Input>
                        <img src="https://img.icons8.com/ios/50/000000/search.png"></img>
                    </div>>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default NavBar;


import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';

const NavBar = () => {
    return(
        <div>
            <AppBar position='absolute'>
                <Toolbar>
                    Bukuku
                    <Input style={{float:'right'}}></Input>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default NavBar;


import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';

import './Navbar.css';

const NavBar = () => {
    return(
        <div position='absolute'>
            <AppBar >
                <div className="navbar">
                    <h4 className="logo">Bukuku</h4>
                    <div className="search-input">
                     <input></input>
                     <button>search</button>
                </div>
                <img className="img-profil" src="https://lh3.googleusercontent.com/-r-J7b6Nd1W8/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcbACnEtjGHxbVvaUl3gB4vRqE9Vhw/s64-c-mo/photo.jpg"></img>
                <button className="button-left">Bantuan</button>
                <button className="button-left">Keranjang</button>
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


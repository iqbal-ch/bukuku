import React from 'react'
import './style.css'

import photoSrc from '../static/account.png'

const NavBar = () => {
    return (
        <div className="header">
	        <a href="#">Ayuna Store</a>
            <select name="cars">
                <option value="Semua">Semua</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <input></input>
                <button>Search</button>
                <button>Keranjang</button>
                <button>Bantuan</button>
            <a style={{float:'right'}}><img src={photoSrc}></img></a>
        </div>
    )
}

export default NavBar;
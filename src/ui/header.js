import React from 'react'
import './header.css'

const Header = () => {
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

        </div>
    )
}

export default Header;
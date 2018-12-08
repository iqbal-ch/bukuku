import React from 'react';
import topi from '../static/topi.jpg'

const CardProduk = () => {
    return (
        <div className="card-produk"  >
	        <img src={topi}style={{height:200}}></img>
            <h3>Nama Produk - title</h3>
            <h4>Rp.5000.000</h4>
            <button>Tamhahkan</button>
        </div>
    )
}

export default CardProduk;
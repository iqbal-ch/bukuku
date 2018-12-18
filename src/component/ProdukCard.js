import React from 'react';

import './ProdukCard.css'


const ProdukCard = () => {
    return (
        <div className="produk-card">
            <img className="img-produk" src="https://inc.mizanstore.com/aassets/img/com_cart/produk/berhentidikamu.jpg"></img>
            <h4 className="book-title">Judul</h4>
            <h5 className="book-author">Pengarang</h5>
            <h6 className="book-price">Rp 60.000,-</h6>
            <button className="btn-order">BELI</button>
        </div>
    )
}

export default ProdukCard;
import React from 'react';
import {Link} from 'react-router-dom'
import './ProdukCard.css'


const ProdukCard = (produk) => {
    let img = "http://localhost:3001/"+produk.product.image;
    // console.log(img);
    
    return (
        <div className="produk-card">
            <img className="img-produk" alt="produk photo" src={img}></img>
            <h4 className="book-title">{produk.product.nama}</h4>
            <h5 className="book-author">{produk.product.category}</h5>
            <h6 className="book-price">Rp {produk.product.harga}-</h6>
            <Link to={`/produk/detail/${ produk.product._id }`}>
                <button className="btn-order">Detail</button>
            </Link>
            
        </div>
    )
}

export default ProdukCard;
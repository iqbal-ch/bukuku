import React from 'react'
import {Link} from 'react-router-dom'

import './DetailProduk.css'

const SummaryProduk = (props) => {
    const img = props.barang.image;
    const image = img.replace("3000","3001");
        return(
            <div className="summary-produk">
                <img className="img-galery" src={image}></img>
                <div className="form-produk">
                    <h1>{props.barang.nama}</h1>
                    <h6 style={{display:"inline"}}>Kategory : {props.barang.category}</h6>
                    <h2>Rp. {props.barang.harga},-</h2>
                    <h6>qty :</h6>
                    <button onClick={props.deQty}>-</button><input value={props.qty}/><button onClick={props.inQty}>+</button>
                    <div>
                    <Link to={{
                        pathname:'/checkout',
                        state:{
                            qty:props.qty,
                            barang :props.barang
                        }
                    }}>
                        <button className="btn-order" disabled={props.qty === 0}>BELI</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
}

export default SummaryProduk;
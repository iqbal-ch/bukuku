import React from 'react'

import './DetailProduk.css'

const SummaryProduk = (props) => {
        return(
            <div className="summary-produk">
                <div className="img-galery">
                    
                </div>
                <div className="form-produk">
                    <h1>{props.barang.nama}</h1>
                    <h6 style={{display:"inline"}}>Kategory : {props.barang.category}</h6>
                    <h2>Rp. {props.barang.harga},-</h2>
                    <h6>qty :</h6>
                    <button onClick={props.deQty}>-</button><input value={props.qty}/><button onClick={props.inQty}>+</button>
                    <div>
                        <button>BELI</button>
                        {/* <button>ADD TO CART</button> */}
                    </div>
                </div>
            </div>
        )
}

export default SummaryProduk;
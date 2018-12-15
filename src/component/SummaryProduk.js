import React from 'react'

import './DetailProduk.css'

const SummaryProduk = () => {
    return(
        <div className="summary-produk">
            <div className="img-galery">
                
            </div>
            <div className="form-produk">
                <h1>Karina Gamis Only By Gerai Cinta</h1>
                <h6 style={{display:"inline"}}>Kategory : Gamis Only</h6> | ini component bintag
                <h2>Rp. 200.000,-</h2>
                <h6>qty :</h6>
                <button>-</button><input></input><button>+</button>
                <div>
                    <button>BELI</button>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default SummaryProduk;
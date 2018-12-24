import React from 'react'

import './DetailProduk.css'

const Detail = (props) => {
    return(
        <div className="tab">
            <button>Detail</button>
            <button>Spesifikasi</button>
            <button>Ulasan</button>
            <div className="detail">
                {props.barang.description}
            </div>

        </div>
    )
}

export default Detail;
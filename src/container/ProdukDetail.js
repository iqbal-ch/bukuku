import React from 'react'

import SummaryProduk from '../component/SummaryProduk'
import Detail from '../component/Detail'

const ProdukDetail = (props) => {
    console.log(props)
    return(
        <div>
            <SummaryProduk qty={props.qty} inQty={props.inQty} deQty={props.deQty} barang={props.barang}/>
            <Detail barang={props.barang}/>
        </div>
    )
}

export default ProdukDetail;
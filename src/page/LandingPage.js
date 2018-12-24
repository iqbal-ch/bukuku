import React from 'react'

import Banner from '../ui/Banner'
import ProdukCard from '../component/ProdukCard'

const Landing = () => {
    return(
        <div>
            <Banner/>
            <Banner/>
            <Banner/>
            <div className="produk">
            </div>
            <div className="coba">
                <button className="btn-loadmore">Load More</button>
            </div>
        </div>
    )
}

export default Landing;
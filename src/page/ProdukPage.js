import React from 'react'

import Category from '../ui/Category'
import ProdukCard from '../component/ProdukCard'

const ProdukPage = () => {
    return(
        <div>
            <Category />
            <div className="produk">
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
                <ProdukCard/>
            </div>
            <button className="btn-loadmore">Load More</button>
        </div>
    )
    
} 

export default ProdukPage;
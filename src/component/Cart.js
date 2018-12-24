import React from 'react'

import './cart.css'
const Cart = () =>{
    return(
        <div className="cart">
            <table>
                <tr>
                    <th>Produk</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div>
                            <img className="img-produk"></img>
                            <div className="label-produk">
                                <h5>nama</h5>
                                <h5>category</h5>
                            </div>
                            
                        </div>
                    </td>
                    <td>Rp.100.000,-</td>
                    <td>2</td>
                    <td>Rp.200.000,-</td>
                </tr>
            </table>
        </div>
    )
}

export default Cart;

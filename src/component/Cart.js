import React from 'react'

import './cart.css'
const Cart = (props) =>{
    const img = props.item.barang.image;
    const image = img.replace("localhost:3000","bukuku.codepanda.id");
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
                            <img className="img-product" src={image}></img>
                            <div className="label-produk">
                                <h5>{props.item.barang.nama}</h5>
                                <h5>{props.item.barang.category}</h5>
                            </div>
                            
                        </div>
                    </td>
                    <td>Rp.{props.item.barang.harga},-</td>
                    <td>{props.item.qty}</td>
                    <td>Rp.{props.item.barang.harga * props.item.qty},-</td>
                </tr>
            </table>
        </div>
    )
}

export default Cart;

import React, { Component } from 'react'

import Spinner from '../ui/Spinner'

// import './cart.css'
import Axios from 'axios';

class Order extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
            let user = localStorage.getItem("user")
            user = JSON.parse(user)
            console.log(user.token)

            Axios.get('http://bukuku.codepanda.id/orders',null,{
                headers: {'Authorization': "Bearer " + user.token}
           }).then(res => {
                let order = res.data;
                console.log(order)
                console.log(this.state)
           }).catch(err => {
                console.log(err);
              })
    }

    render(){
    // const img = props.item.barang.image;
    // const image = img.replace("localhost:3000","bukuku.codepanda.id");
    return(
        <div className="cart">
            {/* <table>
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
                                <h6>{props.item.barang.category}</h6>
                            </div>
                            
                        </div>
                    </td>
                    <td>Rp.{props.item.barang.harga * props.item.qty},-</td>
                    <td>{props.item.qty}</td>
                    <td>{props.status},-</td>
                </tr>
            </table> */}
        </div>
    )
    }
}

export default Order;

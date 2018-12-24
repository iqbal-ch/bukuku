import React, {Component} from 'react'
import Cart from '../component/Cart'
import './cartpage.css'
class CartPage extends Component {

    render(){
        return(
            <div>
                <Cart/>
                <div className="alamat">
                    <label className="label-alamat">alamat pengiriman :</label>
                    <textarea className="field-alamat"></textarea>
                    <button className="btn-alamat">Proses</button>
                </div>
                
            </div>
        )
    }
}

export default CartPage;
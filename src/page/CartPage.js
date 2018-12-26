import React, {Component} from 'react'
import Cart from '../component/Cart'
import './cartpage.css'
import Axios from 'axios';
class CartPage extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state ={
            alamat:''
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleOrder(){
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        Axios.post('http://bukuku.codepanda.id/orders/'+this.props.location.state.barang._id, {
            address : this.state.alamat,
            qty : this.props.location.state.qty
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + user.token
            }
       })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
    }
    render(){
        return(
            <div>
                <Cart item={this.props.location.state}/>
                <div className="alamat">
                    <label className="label-alamat">alamat pengiriman :</label>
                    <textarea className="field-alamat" name="alamat" value={this.state.alamat} onChange={this.handleChange}></textarea>
                    <button className="btn-alamat" onClick={this.handleOrder}>Proses</button>
                </div>
            </div>
        )
    }
}

export default CartPage;
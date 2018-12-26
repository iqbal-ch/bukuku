import React, { Component,Fragment } from 'react'
import Spinner from '../ui/Spinner'

import ProdukDetail from '../container/ProdukDetail'
import Axios from 'axios';

class ProdukDetailPage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            show : null,
            qty: 0,
            loading: true
        }
        this.inQty = this.inQty.bind(this);
        this.deQty = this.deQty.bind(this);
    }
   

    inQty() {
        this.setState({
          qty: this.state.qty + 1
        });
      }

      deQty() {
        if(this.state.qty > 0){
            this.setState({
                qty: this.state.qty - 1
            });
        }
      }
      
    async componentWillMount() {
        const _id = this.props.match.params.id;

            let user = localStorage.getItem("user")
            user = JSON.parse(user)

            Axios.get('http://localhost:3001/barangs/'+_id,null,{
                headers: {'Authorization': "Bearer " + user.token}
           }).then(res => {
                let products = res.data;
                this.setState({
                    show: products,
                    loading:false
                })
                console.log(this.state)
           }).catch(err => {
                console.log(err);
              })
    }

    render(){
        const barang = this.state.show
        return(
            <div>
                {this.state.loading && barang === null &&
                    <Spinner />
                }
                {
                    barang !== null && <ProdukDetail qty={this.state.qty} barang={barang} inQty={this.inQty} deQty={this.deQty}/>
                }  
            </div>
        )
    }
    
}

export default ProdukDetailPage;
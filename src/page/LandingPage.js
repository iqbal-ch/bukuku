import React, { Component } from 'react'
import { connect } from 'react-redux';

import Spinner from '../ui/Spinner'
import More from '../ui/moreImg'
import Banner1 from '../ui/banner1'
import Banner2 from '../ui/banner2'

import {fetchProducts}  from '../actions';
import ProdukCard from '../component/ProdukCard'

class Landing extends Component {
    constructor(props){
        super(props);

        this.state  = {
            loading: true
        }
        this.klikMore = this.klikMore.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts(() => {
            this.setState({ 
                loading: false 
            })
            }
        );
    }

    klikMore(){
        this.props.history.push("/produk") 
    }



    render(){
        let products = this.props.products.slice(0,4);
        return(
            <div>
                {this.state.loading &&
                    <Spinner />
                }
                {!this.state.loading &&
                <div>
                    <Banner1/>
                    <Banner2/>
                    <div className="produk">
                    {
                    products.map( p => (
                                <ProdukCard product={p} key={p._id}/>
                    ))
                    }
                    </div>
                    <div className="coba">
                        <button className="btn-loadmore" onClick={this.klikMore}>See More <More /></button>
                    </div>
                </div>
                }
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return { products: state.Produk.items }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (values) => {dispatch(fetchProducts(values)) }
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(Landing);
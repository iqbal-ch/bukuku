import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux';

import Category from '../ui/Category'
import ProdukCard from '../component/ProdukCard'
import Spinner from '../ui/Spinner'

import {fetchProducts}  from '../actions';

class ProdukPage extends Component {

    state  = {
        loading: true,
      }

    componentWillMount() {
        this.props.fetchProducts(() => {
            this.setState({ loading: false })
            }
        );
    }
    render(){
        const products = this.props.products;
        const p = products.map(p => {   
            return (
                <ProdukCard product={p} key={p._id}/>
            );
        });
        return(
            <Fragment>
                {this.state.loading &&
                    <Spinner />
                }
                <Category />
                <div className="produk">
                    {p}
                </div>
                <button className="btn-loadmore">Load More</button>
            </Fragment>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProdukPage);
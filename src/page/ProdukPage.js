import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux';

import Category from '../ui/Category'
import ProdukCard from '../component/ProdukCard'
import Spinner from '../ui/Spinner'

import {fetchProducts}  from '../actions';

class ProdukPage extends Component {

    constructor(props){
        super(props);

        this.state  = {
            loading: true,
            input:null,
            filter:null
        }

        this.handleCategory = this.handleCategory.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts(() => {
            this.setState({ 
                filter: this.props.products,
                loading: false 
            })
            }
            
        );
    }

    handleSearch(e){
        console.log(e.target.value)
        this.setState({
            loading: true 
        })
        let items = this.props.products;
        if(e.target.value === ''){
            this.setState({ 
                filter: this.props.products,
                loading: false 
            })
        }else{
            const regex = new RegExp(e.target.value, "ig");
            console.log(regex)
            let filter = items.filter(item =>{
                return item.nama.match(regex) !== null
            })
            this.setState({
                filter: filter,
                loading: false 
            })
        }
    }
    handleCategory(e){
        this.setState({
            loading: true 
        })
        let items = this.props.products;
        if(e !== 'all'){
            let filter = items.filter(item =>{
                console.log(e)
                return item.category === e
            })
            this.setState({
                filter: filter,
                loading: false 
            })
        }else{
            this.setState({
                filter: items,
                loading: false 
            })
        }
    }

    render(){
        let category = ['all'];
        if(this.state.filter){
           let products = this.props.products;
            let cat = products.map(p=> {
                return p.category;
            });

            cat = [...new Set(cat)];
            category = category.concat(cat);
        }
        
        return(
            <div>
                {this.state.loading &&
                    <Spinner />
                }
                {this.state.filter !== null &&
                    <div>
                        <div className="search-input">
                            <input onChange={this.handleSearch} value={this.state.input}></input>
                        </div>
                        <Category list={category} onClick={this.handleCategory}/>
                        <div className="produk">
                        {this.state.filter !== null &&
                            this.state.filter.map( p => (
                                <ProdukCard product={p} key={p._id}/>
                        ))
                        }
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

export default connect(mapStateToProps,mapDispatchToProps)(ProdukPage);
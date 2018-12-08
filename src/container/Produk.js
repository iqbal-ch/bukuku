import React, { Component } from 'react'
import CardProduk from '../component/card-produk';

class Produk extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
        return (
            <div style={{display:'flex'}}>
                <div>
                    <CardProduk/>
                    <CardProduk/>
                    <CardProduk/>
                </div>
                <div>
                    <CardProduk/>
                    <CardProduk/>
                    <CardProduk/>
                </div>
                <div>
                    <CardProduk/>
                    <CardProduk/>
                    <CardProduk/>
                </div>
            </div>
        );   
    }
};

export default Produk;
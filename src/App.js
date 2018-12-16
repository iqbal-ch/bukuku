import React, { Component } from 'react';
import './App.css';
import ProdukCard from './component/ProdukCard'
import Footer from './ui/Footer';
import NavBar from './ui/NavBar';
import Category from './ui/Category'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Category />
          <div className="produk">
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
            <ProdukCard/>
          </div>
        </div>
        <button className="btn-loadmore">Load More</button>
        <Footer />
      </div>
    );
  }
}

export default App;

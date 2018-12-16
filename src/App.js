import React, { Component } from 'react';
import './App.css';
import Banner from './ui/Banner'
import ProdukCard from './component/ProdukCard'
import Footer from './ui/Footer';
import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Banner/>
          <Banner/>
          <Banner/>
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
          <div className="coba">
            <button className="btn-loadmore">Load More</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

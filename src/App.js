import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './ui/header'
import Footer from './ui/footer';
import Produk from './container/Produk'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Produk />
        <Footer />
      </div>
    );
  }
}

export default App;

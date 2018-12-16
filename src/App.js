import React, { Component } from 'react';
import './App.css';
import Footer from './ui/Footer';
import Produk from './container/Produk'
import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Produk />
        <Footer />
      </div>
    );
  }
}

export default App;

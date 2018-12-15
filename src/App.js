import React, { Component } from 'react';
import './App.css';
import Footer from './ui/Footer';
import NavBar from './ui/NavBar';
import ProdukDetail from './container/ProdukDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <ProdukDetail />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

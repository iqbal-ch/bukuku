import React, { Component } from 'react';
import './App.css';

import NavBar from './ui/NavBar'
import Banner from './ui/Banner'
import ProdukBanner from './ui/ProdukBanner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Banner/>
          <ProdukBanner/>
          <ProdukBanner/>
        </div>
      </div>
    );
  }
}

export default App;

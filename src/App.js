import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from './ui/Footer';
import NavBar from './ui/NavBar';


import Landing from './page/LandingPage'
import ProdukDetailPage from './page/ProdukDetailPage'
import ProdukPage from './page/ProdukPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/produk' component={ProdukPage} />
            <Route path='/produk/detail' component={ProdukDetailPage} />
          </Switch>       
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

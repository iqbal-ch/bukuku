import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from './ui/Footer';
import NavBar from './ui/NavBar';

import Landing from './page/LandingPage'
import ProdukDetailPage from './page/ProdukDetailPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
         <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/detail' component={ProdukDetailPage} />
         </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

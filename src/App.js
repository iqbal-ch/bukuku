import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';

import Footer from './ui/Footer';
import NavBar from './ui/NavBar';

import Login from './page/Login'
import Landing from './page/LandingPage'
import ProdukDetailPage from './page/ProdukDetailPage'
import ProdukPage from './page/ProdukPage'
import SignupPage from './page/Signup'
import notFound from './page/404'

import ProtectedRoute from './service/protected.route';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignupPage} />
            <ProtectedRoute exact path='/produk' component={ProdukPage} />
            <ProtectedRoute path='/produk/detail' component={ProdukDetailPage} />
            <Route path='*' component={notFound} />
          </Switch>       
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

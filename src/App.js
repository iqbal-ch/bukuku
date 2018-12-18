import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Footer from './ui/Footer';
import NavBar from './ui/NavBar';

import Login from './page/Login'
import Landing from './page/LandingPage'
import ProdukDetailPage from './page/ProdukDetailPage'
import ProdukPage from './page/ProdukPage'


import './App.css';

const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuthCentralState.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Route exact path='/' component={Landing} />
          <Route path='/login' fakeAuth={fakeAuthCentralState} component={Login} />
          <Switch>
            <ProtectedRoute exact path='/produk' component={ProdukPage} />
            <ProtectedRoute path='/produk/detail' component={ProdukDetailPage} />
          </Switch>       
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

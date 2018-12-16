import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from './ui/Footer';
import NavBar from './ui/NavBar';
import Landing from './page/LandingPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Route exact path='/' component={Landing} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

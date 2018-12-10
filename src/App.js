import React, { Component } from 'react';
import './App.css';

import NavBar from './ui/NavBar'
import Banner from './ui/Banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner/>
      </div>
    );
  }
}

export default App;

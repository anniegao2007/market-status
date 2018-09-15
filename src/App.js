import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {WhackAMole} from './WhackAMole.js';
import {MarketData} from './MarketData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarketData />

        <WhackAMole />
      </div>
    );
  }
}

export default App;

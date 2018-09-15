import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {WhackAMole} from './WhackAMole.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Enter stock code: <input type="text"/> </p>

        <WhackAMole />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {WhackAMole} from './WhackAMole.js';
import {MarketData} from './MarketData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.showView = this.showView.bind(this);
    this.state = {
      view: null
    }
  }
  
  showView(c) {
    this.setState({view: c});
  }

  render() {
    let view = null;
    if(this.state.view === 1) {
      view = <MarketData />;
    } else if(this.state.view === 2) {
      view = <WhackAMole />;
    } else {
      view = (
        <div>
          <button className="Button" onClick={() => this.showView(1)}>View Market Data</button>
          <br />
          <br />
          <button className="Button" onClick={() => this.showView(2)}>Play Whack-A-Mole</button>
        </div>
      );
    }
    return (
      <div className="App">
        {view}
      </div>
    );
  }
}

export default App;

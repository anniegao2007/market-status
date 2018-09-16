import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {WhackAMole} from './WhackAMole.js';
import {MarketData} from './MarketData.js';
import {Tutorial} from './Tutorial.js';

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
      view = (
        <div>
          <Tutorial />
          <br />
          <div className="centertext">
            <button className="button" onClick={() => this.showView(-1)}>Back</button>
          </div>
        </div>
      );
    } else if(this.state.view === 2) {
      view = (
        <div>
          <MarketData />
          <br />
          <div className="centertext">
            <button className="button" onClick={() => this.showView(-1)}>Back</button>
          </div>
        </div>
      );
    } else if(this.state.view === 3) {
      view = (
        <div>
          <WhackAMole />
          <br />
          <div className="centertext">
            <button className="button" onClick={() => this.showView(-1)}>Back</button>
          </div>
        </div>
      );
    } else {
      view = (
        <div className="centertext">
          <h1>HackMIT 2018 (until we get a better title)</h1>
          <button className="button" onClick={() => this.showView(1)}>Tutorial</button>
          <br />
          <br />

          <button className="button" onClick={() => this.showView(2)}>View Market Data</button>
          <br />
          <br />

          <button className="button" onClick={() => this.showView(3)}>Play Whack-A-Mole!</button>
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

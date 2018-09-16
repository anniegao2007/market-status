import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {WhackAMole} from './WhackAMole.js';
import {MarketData} from './MarketData.js';
import {Tutorial} from './Tutorial.js';
import axios from 'axios';
import molecartoon from './molecartoon.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.showView = this.showView.bind(this);
    this.state = {
      view: null,
      gifs: []
    };
  }

  componentDidMount() {
    axios.get("http://api.giphy.com/v1/gifs/search?q=stock+market+finance&api_key=bVs0F29U8P2a2YAUunsCS5Hjx9GlgX0y&limit=3").then(res => {
        let gif1 = res.data.data[0].images.fixed_height.url;
        let gif2 = res.data.data[1].images.fixed_height.url;
        let gif3 = res.data.data[2].images.fixed_height.url;
        this.setState({ gifs: [gif1, gif2, gif3] });
    });
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
          <h1>
            <img className="gifs" width={100} height={100} src={molecartoon} />
            Financial Moles
            <img className="gifs" width={100} height={100} src={molecartoon} />
          </h1>
          
          <button className="button" onClick={() => this.showView(1)}>Tutorial</button>
          <br />
          <br />

          <button className="button" onClick={() => this.showView(2)}>View Market Data</button>
          <br />
          <br />

          <button className="button" onClick={() => this.showView(3)}>Play Whack-A-Mole!</button>
          <br />
          <br />

          <img className="gifs" src={this.state.gifs[1]} />
          <img className="gifs" src={this.state.gifs[2]} />
        </div>
      );
    }
    return (
      <div className="app">
        {view}
      </div>
    );
  }
}

export default App;

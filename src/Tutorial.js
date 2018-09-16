import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Tutorial">
        <h1>Useful Vocabulary</h1>
		
		<h2>Strong Buy</h2>
		<h3>Analysts strongly recommend you to purchase this stock</h3>
		
		<h2>Buy</h2>
		<h3>Also known as outperform and moderate buy. Analysts expect the stock to do slightly better than the average annual market return of 10%.
		It is recommended to buy this stock.</h3>
		
		<h2>Hold</h2>
		<h3>Analysts expect the company to perform the same as similar companies in the market and meet the average annual market return of 10%.
		There is no strong need to sell or buy the stock.</h3>		
		
		<h2>Sell</h2>
		<h3>Also known as underperform or moderate sell. Analysts expect the stock to do slightly worse than the average annual market return of 10%.
		It is recommended to sell this stock.</h3>
		
		<h2>Strong Sell</h2>
		<h3>Analysts strongly recommend you to sell this stock.</h3>
		
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Introduction Page">
        <h2>What is a stock?</h2>
		<h3>A stock is a fractional ownership of a company and is measured in shares. A company can sell shares of stock to the general
		public. If a person buys stock, he or she, in theory, has a right to a portion of the company's profits. Many companies
		decide to reinvest their profits back into their business rather than distribute the money to their shareholders. Nevertheless, if
		the public believes that a company has strong growth potential, other investors will value the stock at a higher price. They
		will be willing to pay a much higher price per share for the stock that you purchased.</h3>
		
		<h2>What is a stock market?</h2>
		<h3>A stock market is a place for investors to buy and sell stock. Two main stock markets are the New York Stock Exchange (NYSE) and 
		Nasdaq. 
      </div>
    );
  }
}

export default App;

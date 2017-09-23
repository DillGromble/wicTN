import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <img src={logo} className="App-logo" alt="logo for WIC TN" />
          <div className="list-container">
            <ul className="icon-list">
              <li className="icon wic">one</li>        
              <li className="icon ebt">two</li>
              <li className="icon snap">three</li>
            </ul>
          </div>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
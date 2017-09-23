import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import OptionsList from './components/OptionsList'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      wic: true,
      ebt: true,
      snap: true,
      choiceList: false
    }
  }

  handleChoices(e) {
    this.setState({
      choiceList: !this.state.choiceList
    })
  }

  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <img src={logo} className="App-logo" alt="logo for WIC TN" />
          <div className="list-container">
            {this.state.choiceList && <OptionsList />}
          </div>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
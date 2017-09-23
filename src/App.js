import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Images
import EbtIcon from './assets/ebt-icon.svg'
import SnapIcon from './assets/snap-icon.svg'
import WicIcon from './assets/wic-icon.svg'

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

  renderChooser() {
    return (
      <ul className="icon-list">
        <li className="icon wic"><img src={EbtIcon} alt="ebt icon" />one</li>
        <li className="icon ebt"><img src={SnapIcon} alt="ebt icon" />two</li>
        <li className="icon snap"><img src={WicIcon} alt="ebt icon" />three</li>
      </ul>
    )
  }


  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <img src={logo} className="App-logo" alt="logo for WIC TN" />
          <div className="list-container">
            {this.state.choiceList && this.renderChooser()}
          </div>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
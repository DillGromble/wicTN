import React, { Component } from 'react';
import * as firebase from 'firebase';

// CSS
import './App.css';
import secrets from './secrets.js'

// Images
import logo from './assets/logo.svg';
import hamburger from './assets/hamburger-btn.svg'
import addBtn from './assets/add-btn-bars.svg'

// Components
import OptionsList from './components/OptionsList'
import Item from './components/Item'

class App extends Component {
  allStores=[];
  constructor(props){
    super(props)

    this.state = {
      wic: true,
      ebt: true,
      snap: true,
      choiceList: false
    }

    this.handleChoices = this.handleChoices.bind(this)
    this.fb = firebase.initializeApp(secrets);
    var database = firebase.database();
    database.ref('/Stores').once('value').then((snapshot) => {
      var val = snapshot.val();
      for(let key in val){
        this.allStores[key] = val[key];
      }
    });
  }
  getStores(filters){
    return this.allStores;
  }
  handleChoices() {
    this.setState({
      choiceList: !this.state.choiceList
    })
  }

  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <img src={logo} className="App-logo" alt="logo for WIC TN" />
          <img src={hamburger} className="Hamburger" alt="hamburger" onClick={this.handleChoices} />
          <img src={addBtn} className="Add-btn" alt="add button" />
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

import React, { Component } from 'react';

import dbRef from './firebase.config'

// CSS
import './App.css';

// Images
import logo from './assets/logo.svg';
import hamburger from './assets/hamburger-btn.svg'
import addBtn from './assets/add-btn-bars.svg'

// Components
import OptionsList from './components/OptionsList'
import Item from './components/Item'
import GoogleMap from './components/Map'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      wic: true,
      ebt: true,
      snap: true,
      choiceList: false
    }

    this.allStores = [];
    this.db = dbRef
    this.handleChoices = this.handleChoices.bind(this)

    this.db.ref('/Stores').once('value').then(snapshot => {
      const val = snapshot.val();
      for(let key in val){
        this.allStores[key] = val[key];
      }
    });

    this.createStore = this.createStore.bind(this)
  }
  createStore(place){
    //TODO check that the properties exist
    if(!place.placeId) { return false; }
    this.db.ref('/Stores/').push().set(place);
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
        <div id="map"><GoogleMap create={this.createStore} /></div>
      </div>
    );
  }
}

export default App;

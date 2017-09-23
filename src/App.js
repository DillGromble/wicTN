import React, { Component } from 'react';
import * as firebase from 'firebase';
import secrets from './secrets.js'

// CSS
import './App.css';

// Images
import logo from './assets/logo.svg';
import hamburger from './assets/hamburger-btn.svg'
import addBtn from './assets/add-btn-bars.svg'

// Components
import OptionsList from './components/OptionsList'
import Item from './components/Item'
import GoogleMap from './map.jsx'

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
    this.db = firebase.database();
    this.db.ref('/Stores').once('value').then((snapshot) => {
      var val = snapshot.val();
      for(let key in val){
        this.allStores.push(val[key]);
      }
    });
  }
  createStore(place){
    //TODO check that the properties exist
    if(!place.placeId) { return false; }
    this.db.ref('/Stores/').push().set(place);
  }
  getStores(filters=false){
    if(filters){
      var returnStores=[];
      for(var store of this.allStores){
        var filterSatisfied = false;
        for(var key in filters){
          if(store[key] == true && !filterSatisfied){
            returnStores.push(store);
            filterSatisfied = true;
            break;
          }
        }
      }
      return returnStores;
    }
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
        <div id="map"><GoogleMap /></div>
      </div>
    );
  }
}

export default App;

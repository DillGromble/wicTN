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
      choiceList: false,
      plusList: false
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
    // const places = this.props.places
    const { places } = { places: [{name: "Joe's Market", adddress: "123 Main St, Nashville, TN 37212"}, {name: "Kroger", address: "5544 Old Hickory Blvd, Hermitage, TN 37076"}]}
    const items = places.map((place, i) => <Item key={i} name={place.name} address={place.address} />)
    return (
      <div className="container">
        <div className="nav-container">
          <img src={logo} className="App-logo" alt="logo for WIC TN" />
          <img src={hamburger} className="Hamburger" alt="hamburger" onClick={this.handleChoices} />
          <img src={addBtn} className="Add-btn" alt="add button" />
          <div className="list-container">
            { this.state.choiceList && <OptionsList /> }
            { this.state.plusList && <Item /> }
          </div>
        </div>
        <div id="map"><GoogleMap /></div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import * as firebase from 'firebase';
import secrets from './secrets.js'

// CSS
import './App.css';

// Images
import logo from './assets/snapShop-logo.png';
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
      hamburgerList: false,
      plusList: false
    }

    this.handleHamburger = this.handleHamburger.bind(this)
    this.handlePlusButton = this.handlePlusButton.bind(this)
    this.handleHamburgerItemClick = this.handleHamburgerItemClick.bind(this)
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
  handleHamburger() {
    this.setState({
      hamburgerList: !this.state.hamburgerList,
      plusList: false
    })
  }
  handlePlusButton() {
    this.setState({
      plusList: !this.state.plusList,
      hamburgerList: false
    })
  }
  handleHamburgerItemClick(e) {
    let name = e.target.name
    let value = this.state.name
    this.setState({
      [name]: !value
    })
  }

  render() {
    // const places = this.props.places
    const { ebt, snap, wic } = this.state
    const { places } = { places: [{name: "Joe's Market", adddress: "123 Main St, Nashville, TN 37212"}, {name: "Kroger", address: "5544 Old Hickory Blvd, Hermitage, TN 37076"}]}
    const items = places.map((place, i) => <Item key={i} name={place.name} address={place.address} />)
    return (
      <div className="container">
        <div className="nav-container">
          <img src={logo} className="App-logo" alt="logo for WIC TN" />
          <img src={hamburger} className="Hamburger" alt="hamburger" onClick={this.handleHamburger} />
          <img src={addBtn} className="Add-btn" alt="add button" onClick={this.handlePlusButton} />
          <div className="list-container">
            { this.state.hamburgerList && <OptionsList {...{ebt, snap, wic}} handleClick={this.handleHamburgerItemClick} /> }
            { this.state.plusList && <Item /> }
            { this.state.plusList && <Item /> }
            { this.state.plusList && <Item /> }
          </div>
        </div>
        <div id="map"><GoogleMap /></div>
      </div>
    );
  }
}

export default App;

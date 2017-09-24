import React, { Component } from 'react';

import dbRef from './firebase.config'

// CSS
import './App.css';

// Images
import logo from './assets/snapShop-logo.png';
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
      hamburgerList: false,
      plusList: false
    }

    this.handleHamburger = this.handleHamburger.bind(this)
    this.handlePlusButton = this.handlePlusButton.bind(this)
    this.handleEbt = this.handleEbt.bind(this)
    this.handleSnap = this.handleSnap.bind(this)
    this.handleWic = this.handleWic.bind(this)

    this.allStores = [];
    this.db = dbRef
    // this.handleChoices = this.handleChoices.bind(this)

    this.db.ref('/Stores').once('value').then(snapshot => {
      const val = snapshot.val();
      for(let key in val){
        this.allStores.push(val[key]);
      }
    });

    this.createStore = this.createStore.bind(this)
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
  handleWic() {
    this.setState({
      wic: !this.state.wic
    })
  }
  handleEbt() {
    this.setState({
      ebt: !this.state.ebt
    })
  }
  handleSnap() {
    this.setState({
      snap: !this.state.snap
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
            { this.state.hamburgerList && <OptionsList {...{ebt, snap, wic}} handleEbt={this.handleEbt} handleSnap={this.handleSnap} handleWic={this.handleWic} /> }
            { this.state.plusList && <Item /> }
            { this.state.plusList && <Item /> }
            { this.state.plusList && <Item /> }
          </div>
        </div>
        <div id="map"><GoogleMap create={this.createStore} /></div>
      </div>
    );
  }
}

export default App;

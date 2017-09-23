export default createStore = place => {
  //TODO check that the properties exist
  if(!place.placeId) { return false; }
  this.db.ref('/Stores/').push().set(place);
}

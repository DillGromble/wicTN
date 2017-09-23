


const request = {
  location: center,
  radius: '1128.497720',
  type: ['food']
}

this.state.service.nearbySearch(request, (results, status) => {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      let place = results[i];
      const fnObj = {
        placeId: result[i].place_id,
        name: result[i].name,
        address: result[i].formatted_address,
        lat: result[i].geometry.location.lat(),
        long: result[i].geometry.location.lng(),
        wic: true,
        ebt: true,
        snap: true
      };
      this.props.create(fnObj)
    }
  }
})



// to send to firebase
const fnObj = {
  placeId: result.place_id,
  name: result.name,
  address: result.formatted_address,
  lat: result.geometry.location.lat(),
  long: result.geometry.location.lng(),
  wic: true,
  ebt: true,
  snap: true
};

this.props.create(fnObj)

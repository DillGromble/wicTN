import React from 'react'
/* global google */

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: new google.maps.LatLng(36.174465, -86.767960),
      map: null,
      userLoc: null,
      service: null
    }
  }

  componentWillMount() {
    const success = pos => {
      const coords = pos.coords
      const center = new google.maps.LatLng(coords.latitude, coords.longitude);


      // this will be tied to button.
      this.state.map.setZoom(15)
      this.state.map.setCenter(center) // TODO: move to button and pull center from state.userLoc
      const request = {
        location: center,
        radius: '1155581.153000',
        type: ['food']
      };

      this.state.service.nearbySearch(request, (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
          }
        }
      }
    }

    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);





    const error = err => {
      console.error(`ERROR(${err.code}): ${err.message}`);
      // this.setState({ center })
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }

  componentDidMount() {
    const center = this.state.center
    const map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 10
    })
    const service = new google.maps.places.PlacesService(map)
    this.setState({ map, service })
  }

  render() {
    return (
        <div ref="map" style={{ 'height': '100vh' }} />
    )
  }
}

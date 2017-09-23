import React from 'react'
/* global google */

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: new google.maps.LatLng(36.174465, -86.767960),
      map: null,
      userLoc: null
    }
  }

  componentWillMount() {
    const success = pos => {
      const coords = pos.coords
      const center = new google.maps.LatLng(coords.latitude, coords.longitude);
      this.state.map.setZoom(15)
      this.state.map.setCenter(center) // TODO: move to button and pull center from state.userLoc
    }

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
    });
    this.setState({ map })
  }

  render() {
    return (
        <div ref="map" style={{ 'height': '100vh' }} />
    )
  }
}

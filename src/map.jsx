import React from 'react'
/* global google */

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: null,
      map: null
    }
  }

  componentWillMount() {
    const success = pos => {
      const coords = pos.coords
      const center = new google.maps.LatLng(coords.latitude, coords.longitude);

      this.setState({
        center
      })
    }

    const error = err => {
      console.error(`ERROR(${err.code}): ${err.message}`);
      const center = new google.maps.LatLng(36.174465, -86.767960); //nashville coords
      this.setState({
        center
      })
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  componentDidMount() {
    const center = this.state.center
    const map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 10
    });

    this.setState({
      map
    })
  }

  render() {
    return(
      <div ref="map">
        <h1>test</h1>
      </div>
    )
  }
}

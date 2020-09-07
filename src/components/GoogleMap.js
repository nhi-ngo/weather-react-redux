import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { google } = window;
    this.map = new google.maps.Map(this.mapRef.current, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    return <div ref={this.mapRef}>Loading map...</div>;
  }
}

export default GoogleMap;

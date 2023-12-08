// MapContainer.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: { lat: 0, lng: 0 }, // Set initial coordinates to (0, 0)
    };
  }

  componentDidMount() {
    const locationLink = 'https://maps.app.goo.gl/6wY9WQonVDHX2fPc6'; // Replace with your actual location link
    const coordinates = this.extractCoordinatesFromLink(locationLink);
    this.setState({ coordinates });
  }

  extractCoordinatesFromLink(link) {
    const [, coordinates] = link.match(/q=([-\d.]+),([-\d.]+)/) || [];
    if (coordinates) {
      const [lat, lng] = coordinates.split(',');
      return { lat: parseFloat(lat), lng: parseFloat(lng) };
    }
    return { lat: 0, lng: 0 }; // Default to (0, 0) if parsing fails
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={this.state.coordinates}
      >
        <Marker position={this.state.coordinates} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(MapContainer);

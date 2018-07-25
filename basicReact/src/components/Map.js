import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends React.Component {
  render(){
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          // Oxford
          defaultCenter = { { lat: 51.752021, lng: -1.257726 } }
          // Manchester
          // defaultCenter = { { lat: 53.480759, lng: -2.242631 } }
          defaultZoom = { 13 }
        >
        </GoogleMap>
     ));
  
    return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `400px`, width: '800px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
};

export default Map;

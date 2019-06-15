import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import hexColorFromString from "./utils/hexColorFromString"
import findBounds from './utils/findBounds';
import Marker from './Marker';

const MAP_HEIGHT = 600;
const MAP_WIDTH = 600;
const K_HOVER_DISTANCE = 15;
// eslint-disable-next-line react/prefer-stateless-function
class Map extends Component {

  render() {
    const { files, index } = this.props;
    const mapDefaults = { zoom: 0, center: { lat: 36, lng: -100 } }
    const bounds = findBounds({ arr: files[index] });
    const size = { width: MAP_WIDTH, height: MAP_HEIGHT }
    const { zoom, center } = bounds ? fitBounds(bounds, size) : mapDefaults

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: MAP_HEIGHT, width: MAP_WIDTH }}>
        <GoogleMapReact
          hoverDistance={K_HOVER_DISTANCE}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          center={center}
          zoom={zoom}
          defaultZoom={mapDefaults.zoom}
          defaultCenter={mapDefaults.center}
        // TODO figure out how to zoom to correct place
        >
          {index >= 0 && files[index].map(row => {
            const { fullAddress, category } = row;
            return (
              <Marker
                key={`${row.lat}-${row.lng}`}
                lat={row.lat}
                lng={row.lng}
                backgroundColor={hexColorFromString(row.category)}
                text={{ fullAddress, category }}
              />
            )
          })}
        </GoogleMapReact>
      </div >
    );
  }
}

export default Map;
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import hexColorFromString from "./utils/hexColorFromString"
import findBounds from './utils/findBounds';


const MAP_HEIGHT = 600;
const MAP_WIDTH = 600;
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
          hoverDistance
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          center={center}
          zoom={zoom}
          defaultZoom={mapDefaults.zoom}
          defaultCenter={mapDefaults.center}
        // TODO figure out how to zoom to correct place
        >
          {index >= 0 && files[index].map(row => {
            console.log(row.lat, row.lng, row.category)
            return (
              <div
                key={`${row.lat}-${row.lng}`}
                lat={row.lat}
                lng={row.lng}
                // text="My Marker"
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: hexColorFromString(row.category),
                  border: '1px solid black',
                  borderRadius: '50%'
                }}
              />
            )
          })}
        </GoogleMapReact>
      </div >
    );
  }
}

export default Map;
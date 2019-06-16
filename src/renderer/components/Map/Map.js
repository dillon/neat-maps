import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import hexColorFromString from "./utils/hexColorFromString"
import findBounds from './utils/findBounds';
import Marker from './Marker';

const MAP_HEIGHT = 600;
const MAP_WIDTH = 600;
const K_HOVER_DISTANCE = 15;
const Map = ({ files, index }) => {
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
          const { fullAddress, category, lat, lng } = row;
          return (
            <Marker
              key={`${lat}-${lng}`}
              lat={lat}
              lng={lng}
              backgroundColor={hexColorFromString(category)}
              text={{ fullAddress, category }}
            />
          )
        })}
      </GoogleMapReact>
    </div >
  );
}

Map.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        fullAddress: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  index: PropTypes.number.isRequired
}
export default Map;
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

// eslint-disable-next-line react/prefer-stateless-function
class Map extends Component {
  render() {
    const { files, index } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={{ lat: 36, lng: -100 }}
          defaultZoom={0}
        // TODO figure out how to zoom to correct place
        >
          {index >= 0 && files[index].map(row => {
            console.log(row.lat, row.lng)
            return (
              <Marker
                key={`${row.lat}-${row.lng}`}
                lat={row.lat}
                lng={row.lng}
                text="My Marker"
              />
            )
          })}
        </GoogleMapReact>
      </div >
    );
  }
}

export default Map;
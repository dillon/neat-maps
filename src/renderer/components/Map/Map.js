import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

// eslint-disable-next-line react/prefer-stateless-function
class Map extends Component {
  render() {
    const { files } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={{ lat: 36, lng: -100 }}
          defaultZoom={0}
        >
          {files.map(row => {

            return (
              <Marker
                lat={59.955413}
                lng={30.337844}
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
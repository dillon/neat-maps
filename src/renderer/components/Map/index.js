import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';


const MapContainer = (props) => <Map {...props} />

const mapStateToProps = ({ fileUploadReducer: { files, index } }) => ({ files, index })

export default connect(mapStateToProps)(MapContainer)
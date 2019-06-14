import React from 'react';
import { connect } from 'react-redux';
import FileUpload from './FileUpload';


const FileUploadContainer = (props) => <FileUpload {...props} />

const mapStateToProps = ({ fileUploadReducer: { numberOfFiles, message } }) => ({ numberOfFiles, message })

export default connect(mapStateToProps)(FileUploadContainer)

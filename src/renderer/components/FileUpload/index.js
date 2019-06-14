import React from 'react';
import { connect } from 'react-redux';
import FileUpload from './FileUpload';


const FileUploadContainer = (props) => <FileUpload {...props} />

const mapStateToProps = ({ fileUploadReducer: { numberOfFiles, fileNames, message, index } }) => ({ numberOfFiles, fileNames, message, index })

export default connect(mapStateToProps)(FileUploadContainer)

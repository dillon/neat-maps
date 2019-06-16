import 'isomorphic-fetch'
import { arrayHasDuplicates, reformatData } from '../helpers';

export const FILE_UPLOAD_REQUEST = 'FILE_UPLOAD_REQUEST';
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_FAILURE = 'FILE_UPLOAD_FAILURE';
export const DELETE_FILE = 'DELETE_FILE';
export const SELECT_FILE = 'SELECT_FILE';

const fileUploadRequest = () => ({
  type: FILE_UPLOAD_REQUEST
})

export const fileUploadFailure = ({ message }) => ({
  type: FILE_UPLOAD_FAILURE,
  payload: { message }
});

export const fileUploadSuccess = ({ name, data }) => ({
  type: FILE_UPLOAD_SUCCESS,
  payload: { name, data }
});


export const fileUpload = ({ data, columns, name }) => (dispatch) => {
  const { ADDRESS, CITY, STATE, ZIPCODE, CATEGORY } = columns;
  if (arrayHasDuplicates([ADDRESS, CITY, STATE, ZIPCODE, CATEGORY])) {
    return dispatch(fileUploadFailure({ message: 'Column selections must each be unique' }))
  }
  const reformatedData = reformatData({ data, columns })
  dispatch(fileUploadRequest())
  // create a bunch of promises and resolve them all
  const promises = reformatedData.map(row => {
    const { address, city, state, zipcode, category } = row
    const fullAddress = `${address}, ${city}, ${state} ${zipcode}`
    // eslint-disable-next-line no-undef
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}&address=${fullAddress}`)
      .then(response => response.json())
      .then(({ results }) => ({
        category,
        lat: results[0].geometry.location.lat,
        lng: results[0].geometry.location.lng,
        fullAddress
      }))
  })
  return Promise.all(promises)
    .then(allPromisesData => dispatch(fileUploadSuccess({ data: allPromisesData, name })))
}


export const deleteFile = ({ index }) => ({
  type: DELETE_FILE,
  payload: { index }
})

export const selectFile = ({ index }) => ({
  type: SELECT_FILE,
  payload: { index }
})
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_FAILURE = 'FILE_UPLOAD_FAILURE';

export const DELETE_FILE = 'DELETE_FILE';
export const SELECT_FILE = 'SELECT_FILE';

export const fileUploadFailure = ({ message }) => ({
  type: FILE_UPLOAD_FAILURE,
  payload: { message }
});

export const fileUploadSuccess = ({ data, name }) => ({
  type: FILE_UPLOAD_SUCCESS,
  payload: { data, name }
});

export const deleteFile = ({ index }) => ({
  type: DELETE_FILE,
  payload: { index }
})

export const selectFile = ({ index }) => ({
  type: SELECT_FILE,
  payload: { index }
})
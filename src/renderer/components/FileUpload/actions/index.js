export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_FAILURE = 'FILE_UPLOAD_FAILURE';

export const DELETE_FILE = 'DELETE_FILE';
export const FILE_SELECT = 'FILE_SELECT';

export const fileUploadFailure = ({ message }) => ({
  type: FILE_UPLOAD_FAILURE,
  payload: { message }
});

export const fileUploadSuccess = ({ data, columns }) => ({
  type: FILE_UPLOAD_SUCCESS,
  payload: { data, columns }
});

export const deleteFile = ({ index }) => ({
  type: DELETE_FILE,
  payload: { index }
})
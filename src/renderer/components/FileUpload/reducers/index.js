import {
  FILE_UPLOAD_FAILURE,
  FILE_UPLOAD_SUCCESS,
  DELETE_FILE,
  SELECT_FILE
} from '../actions'

const initialState = {
  files: [],
  fileNames: [],
  numberOfFiles: 0,
  index: -1,
  message: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD_FAILURE:
      return {
        ...state,
        message: action.payload.message
      };
    case FILE_UPLOAD_SUCCESS: // TODO
      return {
        ...state,
        files: [...state.files, action.payload.data],
        fileNames: [...state.fileNames, action.payload.name],
        numberOfFiles: state.numberOfFiles + 1,
        index: state.index + 1,
        message: ''
      };
    case DELETE_FILE:
      return {
        ...state,
        files: [
          ...state.files.slice(0, action.payload.index),
          ...state.files.slice(action.payload.index + 1)
        ],
        fileNames: [
          ...state.fileNames.slice(0, action.payload.index),
          ...state.fileNames.slice(action.payload.index + 1)
        ],
        numberOfFiles: state.numberOfFiles - 1,
        index: state.index - 1,
        message: ''

      };
    case SELECT_FILE:
      return {
        ...state,
        account: null,
        index: action.payload.index
      };
    default:
      return state;
  }
};

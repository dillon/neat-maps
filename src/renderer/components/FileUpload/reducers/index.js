import {
  FILE_UPLOAD_FAILURE,
  FILE_UPLOAD_SUCCESS,
  DELETE_FILE,
  FILE_SELECT
} from '../actions'

const initialState = {
  files: [],
  numberOfFiles: 0,
  index: -1,
  message: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD_FAILURE:
      return {
        ...state,
        message: action.payload.message
      };
    case FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        files: [...state.files, action.payload.data],
        numberOfFiles: state.numberOfFiles + 1,
        index: state.index + 1,
        message: ''
      };
    case DELETE_FILE:
      return {
        ...state,
        files: [
          ...state.files.slice(0, action.payload.index - 1),
          ...state.files.slice(action.payload.index + 1)
        ],
        numberOfFiles: state.numberOfFiles - 1,
        index: state.index - 1,
        message: ''

      };
    case FILE_SELECT:
      return {
        ...state,
        account: null,
        index: action.payload.index
      };
    default:
      return state;
  }
};

import reducer, { initialState } from './index'
import {
  FILE_UPLOAD_FAILURE,
  FILE_UPLOAD_SUCCESS,
  DELETE_FILE,
  SELECT_FILE
} from '../actions'


describe('file upload reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState
    )
  })

  it('should handle FILE_UPLOAD_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: FILE_UPLOAD_FAILURE,
        payload: { message: 'Run the failure tests' }
      })
    ).toEqual(
      {
        ...initialState,
        message: 'Run the failure tests'
      }
    )
  })

  it('should handle FILE_UPLOAD_SUCCESS', () => {
    const nextState = {
      ...initialState,
      fileNames: ['name'],
      index: 0,
      numberOfFiles: 1,
      files: [{ fakeData: 'fakeData' }]
    }
    expect(
      reducer(initialState, {
        type: FILE_UPLOAD_SUCCESS,
        payload: {
          message: 'Run the success tests',
          data: { fakeData: 'fakeData' },
          name: 'name'
        }
      })
    ).toEqual(nextState)

    expect(
      reducer(nextState, {
        type: FILE_UPLOAD_SUCCESS,
        payload: {
          message: 'Run the second success tests',
          data: { fakeDataTwo: 'fakeDataTwo' },
          name: 'nameTwo'
        }
      })
    ).toEqual({
      ...initialState,
      fileNames: ['name', 'nameTwo'],
      index: 1,
      numberOfFiles: 2,
      files: [{ fakeData: 'fakeData' }, { fakeDataTwo: 'fakeDataTwo' }]
    })
  })

  it('should handle DELETE_FILE', () => {
    const threeFileState = {
      ...initialState,
      fileNames: ['name', 'nameTwo', 'nameThree'],
      index: 2,
      numberOfFiles: 3,
      files: [{ fakeData: 'fakeData' }, { fakeDataTwo: 'fakeDataTwo' }, { fakeDataThree: 'fakeDataThree' }]
    }
    expect(
      reducer(threeFileState, {
        type: DELETE_FILE,
        payload: {
          index: 1
        }
      })
    ).toEqual(
      {
        ...initialState,
        fileNames: ['name', 'nameThree'],
        index: 1,
        numberOfFiles: 2,
        files: [{ fakeData: 'fakeData' }, { fakeDataThree: 'fakeDataThree' }]
      }
    )

    const twoFileState = {
      ...initialState,
      fileNames: ['name', 'nameTwo'],
      index: 1,
      numberOfFiles: 2,
      files: [{ fakeData: 'fakeData' }, { fakeDataTwo: 'fakeDataTwo' }]
    }

    expect(
      reducer(twoFileState, {
        type: DELETE_FILE,
        payload: {
          index: 1
        }
      })
    ).toEqual(
      {
        ...initialState,
        fileNames: ['name'],
        index: 0,
        numberOfFiles: 1,
        files: [{ fakeData: 'fakeData' }]
      }
    )

    expect(
      reducer({ ...twoFileState, index: 0 }, {
        type: DELETE_FILE,
        payload: {
          index: 1
        }
      })
    ).toEqual(
      {
        ...initialState,
        fileNames: ['name'],
        index: 0,
        numberOfFiles: 1,
        files: [{ fakeData: 'fakeData' }]
      }
    )
  })

  it('should handle DELETE_FILE', () => {
    const threeFileState = {
      ...initialState,
      fileNames: ['name', 'nameTwo', 'nameThree'],
      index: 2,
      numberOfFiles: 3,
      files: [{ fakeData: 'fakeData' }, { fakeDataTwo: 'fakeDataTwo' }, { fakeDataThree: 'fakeDataThree' }]
    }
    expect(
      reducer(threeFileState, {
        type: DELETE_FILE,
        payload: {
          index: 1
        }
      })
    ).toEqual(
      {
        ...initialState,
        fileNames: ['name', 'nameThree'],
        index: 1,
        numberOfFiles: 2,
        files: [{ fakeData: 'fakeData' }, { fakeDataThree: 'fakeDataThree' }]
      }
    )

    const twoFileState = {
      ...initialState,
      fileNames: ['name', 'nameTwo'],
      index: 1,
      numberOfFiles: 2,
      files: [{ fakeData: 'fakeData' }, { fakeDataTwo: 'fakeDataTwo' }]
    }

    expect(
      reducer(twoFileState, {
        type: DELETE_FILE,
        payload: {
          index: 1
        }
      })
    ).toEqual(
      {
        ...initialState,
        fileNames: ['name'],
        index: 0,
        numberOfFiles: 1,
        files: [{ fakeData: 'fakeData' }]
      }
    )

    expect(
      reducer({ ...twoFileState, index: 0 }, {
        type: DELETE_FILE,
        payload: {
          index: 1
        }
      })
    ).toEqual(
      {
        ...initialState,
        fileNames: ['name'],
        index: 0,
        numberOfFiles: 1,
        files: [{ fakeData: 'fakeData' }]
      }
    )
  })

  it('should handle SELECT_FILE', () => {
    const threeFileState = {
      ...initialState,
      fileNames: ['name', 'nameTwo', 'nameThree'],
      index: 2,
      numberOfFiles: 3,
      files: [{ fakeData: 'fakeData' }, { fakeDataTwo: 'fakeDataTwo' }, { fakeDataThree: 'fakeDataThree' }]
    }
    expect(
      reducer(threeFileState, {
        type: SELECT_FILE,
        payload: {
          index: 0
        }
      })
    ).toEqual(
      {
        ...threeFileState,
        index: 0,
      }
    )
  })

})

/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CsvParse from '@vtex/react-csv-parse'
import { fileUploadSuccess, fileUploadFailure, deleteFile, selectFile } from './actions'
import { arrayHasDuplicates, reformatData } from './helpers'
import styles from './styles';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      columns: {
        ADDRESS: null,
        CITY: null,
        STATE: null,
        ZIPCODE: null,
        CATEGORY: null
      }
    }
  }

  handleDataUpload = data => {
    this.setState({ data })
  }

  handleErrorUpload = ({ reason }) => {
    const { dispatch } = this.props;
    dispatch(fileUploadFailure({ message: reason }));
  }

  handleSubmitUpload = event => {
    event.persist()
    event.preventDefault()
    const { name } = document.getElementById('fileInput').files[0]
    const { dispatch } = this.props;
    const { data, columns, columns: { ADDRESS, CITY, STATE, ZIPCODE, CATEGORY } } = this.state;
    if (arrayHasDuplicates([ADDRESS, CITY, STATE, ZIPCODE, CATEGORY])) {
      dispatch(fileUploadFailure({ message: 'Column selections must each be unique' }))
    } else {
      dispatch(fileUploadSuccess({ data: reformatData({ data, columns }), name }))
      this.resetState()
    }
  }

  handleChangeSelect = event => {
    event.persist()
    this.setState(prevState => ({
      columns: {
        ...prevState.columns,
        [event.target.name]: parseInt(event.target.value, 10)
      }
    }))
  }

  resetState = () => {
    document.getElementById('fileInput').value = ''
    this.setState({
      data: null,
      columns: {
        address: null,
        city: null,
        state: null,
        zipcode: null,
        category: null
      }
    })
  }

  selectFile = ({ event, index }) => {
    event.preventDefault()
    const { dispatch } = this.props;
    dispatch(selectFile({ index }))
  }

  deleteFile = ({ event, index }) => {
    event.preventDefault()
    const { dispatch } = this.props;
    dispatch(deleteFile({ index }))
  }

  render() {
    const { message, numberOfFiles, fileNames, index } = this.props;
    const { data, columns: { ADDRESS, CITY, STATE, ZIPCODE, CATEGORY } } = this.state
    const columnNames = ['ADDRESS', 'CITY', 'STATE', 'ZIPCODE', 'CATEGORY']
    return (
      <div>
        <div>
          {fileNames.map((x, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={x + i} style={i === index ? styles.fileInfoContainerSelected : styles.fileInfoContainer}>
              <span style={styles.fileInfoChild}>{x}</span>
              <button type="submit" name='select-file' onClick={event => this.selectFile({ event, index: i })} style={styles.selectButton}>Select</button>
              <button type="submit" name='delete-file' onClick={event => this.deleteFile({ event, index: i })}>Delete</button>
            </div>)
          )}
        </div>
        {(numberOfFiles < 3) ?
          <form id="form" onSubmit={this.handleSubmitUpload}>
            <CsvParse
              keys={[0, 1, 2, 3, 4]}
              onDataUploaded={this.handleDataUpload}
              onError={this.handleErrorUpload}
              render={onChange => <input id="fileInput" type="file" style={styles.input} onChange={onChange} accept=".csv" />}
            />
            {data && columnNames.map((name) => {
              return (
                <div key={name} style={styles.selectContainer}>
                  <span style={styles.selectSpan}>{name}: </span>
                  <select style={styles.select} defaultValue='default' form="form" name={name} onChange={this.handleChangeSelect} value={this.state[name]}>
                    <option key={`select ${name}`}>SELECT {name}</option>
                    {Object.keys(data[0]).map((x, i) => (
                      <option key={x + 1} value={i + 1}>{data[0][x]}</option>
                    ))
                    }
                  </select>
                </div>
              )
            })
            }
            {data &&
              <div>
                <input type="submit" value="Submit" title="Submit"
                  disabled={!(data && ADDRESS && CITY && STATE && ZIPCODE && CATEGORY)}
                />
                <p>Designate columns</p>
              </div>
            }
            {(!numberOfFiles && !data) &&
              < p > Upload a .csv file</p>
            }
          </form>
          : <p>Maximum 3 files uploaded</p>
        }
        <p>{message}</p>
      </div >
    )
  }
}
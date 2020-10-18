import React, { Component } from "react";
import { CSVReader } from "react-papaparse";
import './Importer.scss';

const buttonRef = React.createRef();

export default class Importer extends Component {
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
      console.log(e)
      console.log(buttonRef.current);
    }
    
  };

  handleOnFileLoad = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    return (
      <>
        <CSVReader
          className="import__btn"
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}
        >
          <button
            onClick={this.handleOpenDialog}
            style={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              width: "40%",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            Import
          </button>
        </CSVReader>
      </>
    );
  }
}

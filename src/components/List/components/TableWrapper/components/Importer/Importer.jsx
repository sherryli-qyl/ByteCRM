import React, { Component } from "react";
import "./Importer.scss";

export default class Importer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploadState: "",
    };
    this.inputReference = React.createRef();
  }

  fileUploadAction = () => this.inputReference.current.click();
  fileUploadInputChange = (e) => {
    this.setState({
      fileUploadState: e.target.value,
    });
    this.loadFile(e.target.value);
  };

  loadFile = async (path) => {
    const response = await fetch(path);
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    console.log("Importer -> rows", rows);
  };

  render() {
    return (
      <>
        <input
          type="file"
          hidden
          ref={this.inputReference}
          onChange={this.fileUploadInputChange}
        />
        <button className="import__btn" onClick={this.fileUploadAction}>
          Import
        </button>
      </>
    );
  }
}

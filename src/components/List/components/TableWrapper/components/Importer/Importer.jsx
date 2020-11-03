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
  fileUploadInputChange = (e) => this.setState({
    fileUploadState: e.target.value
  });

  render() {
    return (
      <button className="import__btn" onClick={this.fileUploadAction} >
        Import
      </button>
    )
  }
}

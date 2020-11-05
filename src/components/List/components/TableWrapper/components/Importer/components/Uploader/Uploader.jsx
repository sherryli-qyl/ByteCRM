import React, { Component } from "react";
import "./Uploader.scss";

export default class DropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: null,
      wrongType: false,
    };
  }

  onChangeHandler = (event) => {
    const file = event.target.files[0];
    const fileName = file.name.split(".");
    const type = fileName[fileName.length - 1];
    if (type !== "csv") {
      this.setState({
        wrongType: true,
      });
    } else {
      this.readFile(file).then((file) => {
        this.setState({
          fileContent: file,
        });
      });
      setTimeout(() => {
        this.props.getNewData(this.state.fileContent);
      }, 100);
    }
  };

  readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (res) => {
        resolve(res.target.result);
      };
      reader.onerror = (err) => reject(err);
      reader.readAsText(file);
    });
  };

  render() {
    return (
      <>
        <label for="file-upload" class="custom-file-upload">
          upload a csv file
        </label>
        <input id="file-upload" type="file" onChange={this.onChangeHandler} />
        {this.state.wrongType && (
          <div className="error-message">Uploaded file is not a csv file!</div>
        )}
      </>
    );
  }
}

import React, { Component } from "react";
import Uploader from '../Uploader';
import "./UploadModal.scss";

export default class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  closeModal = () => {
    this.props.changeModalVisible(false);
  };

  maskClick = () => {
    this.props.changeModalVisible(false);
  };

  getNewData = (data) => {
    this.props.getNewData(data);
    this.props.changeModalVisible(false);
  };

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <Uploader getNewData={this.getNewData} />
          <div className="modal-operator">
            <button className="modal-operator-close" onClick={this.closeModal}>
              Cancel
            </button>
            <button className="modal-operator-confirm" onClick={this.upload}>
              Upload
            </button>
          </div>
        </div>
        <div className="mask" onClick={this.maskClick} />
      </div>
    );
  }
}

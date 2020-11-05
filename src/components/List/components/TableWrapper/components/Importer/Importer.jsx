import React, { Component } from "react";
import UploadModal from './components/UploadModal';
import "./Importer.scss";

export default class Importer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  showModal = (evt) => {
    evt.preventDefault();
    this.setState({ modalVisible: true });
  };

  changeModalVisible = (s) => {
    this.setState({ modalVisible: s });
  };

  render() {
    return (
      <>
        {this.state.modalVisible && (
          <UploadModal
            changeModalVisible={this.changeModalVisible}
            getNewData={this.props.getNewData}
          />
        )}
        <button className="import__btn" onClick={this.showModal} > Import </button>
      </>
    );
  }
}

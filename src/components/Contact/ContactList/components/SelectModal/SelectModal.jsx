import React, { Component } from "react";
import "./SelectModal.scss";
import DropdownList from "../DropdownList";

class SelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  // 点击取消更新modal中的visible状态
  closeModal = () => {
    this.props.changeVisible(false);
  };

  confirm = () => {
    this.props.changeVisible(false);
  };

  maskClick = () => {
    this.props.changeVisible(false);
  };

  render() {
    return (
      <div className="modal-wrapper">
        {
          <div className="modal">
            <DropdownList
              elements={[
                "Name",
                "Email",
                "Phone number",
                "Contact owner",
                "Associated company",
                "Last activity date",
                "Lead status",
                "Create date",
              ]}
            />
            <div className="modal-operator">
              <button
                className="modal-operator-close"
                onClick={this.closeModal}
              >
                取消
              </button>
              <button className="modal-operator-confirm" onClick={this.confirm}>
                确认
              </button>
            </div>
          </div>
        }
        <div className="mask" onClick={this.maskClick}></div>
      </div>
    );
  }
}

export default SelectModal;

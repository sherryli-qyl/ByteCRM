import React, { Component } from "react";
import "./SelectModal.scss";
import DropdownList from "./components/DropdownList";

class SelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedField: "",
    };
  }

  // 点击取消更新modal中的modalVisible状态
  closeModal = () => {
    this.props.changeModalVisible(false);
  };

  confirm = () => {
    this.props.changeModalVisible(false);
  };

  maskClick = () => {
    this.props.changeModalVisible(false);
  };

  getSelectedField = (field) => {
    this.setState({ selectedField: field });
    console.log(this.state.selectedField);
  };

  selectInput = () => {
    if (
      this.state.selectedField === "Name" ||
      this.state.selectedField === "Email" ||
      this.state.selectedField === "Phone number" ||
      this.state.selectedField === "Contact owner" ||
      this.state.selectedField === "Associated company"
    ) {
      // single input
    } else if (
      this.state.selectedField === "Last activity date" ||
      this.state.selectedField === "Create date"
    ) {
      // 3 dropdown
    } else if (this.state.selectedField === "Lead status") {
      // 1 dropdown
    } else {
      return <></>;
    }
  };

  render() {
    return (
      <div className="modal-wrapper">
        {
          <div className="modal">
            <DropdownList
              className="dropdown-list1"
              hint="Please select a field"
              getSelectedField={this.getSelectedField}
              items={[
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
            {this.selectInput()}

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

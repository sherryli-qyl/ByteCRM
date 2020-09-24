import React, { Component } from "react";
import "./SelectModal.scss";
import DropdownList from "./components/DropdownList";
import StringInput from "./components/StringInput";

const MODAL = {
  OTHER: "OTHER",
  DATE: "DATE",
  STATUS: "STATUS",
  EMPTY: null,
};

const FIELDS = [
  "Name",
  "Email",
  "Phone number",
  "Contact owner",
  "Associated company",
  "Last activity date",
  "Lead status",
  "Create date",
];

const LEAD_STATUS = [
  "New",
  "Open",
  "In progress",
  "Open deal",
  "Unqualified",
  "Attempted to contact",
  "Connected",
  "Bad timing",
];

function generateArray(start, end) {
  return Array.from(new Array(end + 1).keys()).slice(start);
}

const DAYS = generateArray(1, 31);
const YEARS = generateArray(1900, 2020);
const MONTHSNUM = generateArray(1, 12).map((value, index) => {
  let result = [];
  if (value <= 10) {
    result.push("0" + value);
  } else {
    result.push("" + value);
  }
  return result;
});
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dem",
];

class SelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedField: "",
      showType: MODAL.EMPTY,
      dataToEdit: [],
    };
  }

  getSelectedField = (field) => {
    this.setState({ selectedField: field });
    this.getType();
  };

  getType = () => {
    if (
      this.state.selectedField == "Name" ||
      this.state.selectedField == "Email" ||
      this.state.selectedField == "Phone number" ||
      this.state.selectedField == "Contact owner" ||
      this.state.selectedField == "Associated company"
    ) {
      // single STRING input
      this.selectType(MODAL.OTHER);
    } else if (
      this.state.selectedField == "Last activity date" ||
      this.state.selectedField == "Create date"
    ) {
      // 3 dropdown
      console.log("222");
      this.selectType(MODAL.DATE);
    } else if (this.state.selectedField == "Lead status") {
      // 1 dropdown
      console.log("333");
      this.selectType(MODAL.STATUS);
    } else {
      console.log("444");
      this.selectType(MODAL.EMPTY);
    }
  };

  selectType(target) {
    // return (event) => {
    //   event.preventDefault();
    this.setState({
      showType: target,
    });

    console.log(this.state.showType);

    // };
  }

  getInputData = (data) => {
    if (
      this.state.showType !== MODAL.DATE &&
      this.state.showType !== MODAL.EMPTY
    ) {
      //
      this.setState({ dataToEdit: [data] });
    } else if (this.state.showType === MODAL.DATE) {
      //
      let temp = this.state.dataToEdit;
      this.setState({ dataToEdit: temp.push(data) });
    } else {
      //
      this.setState({ dataToEdit: [] });
    }
  };

  processInputData() {
    if (this.state.dataToEdit.length > 1) {
      let year = 1900;
      let month = 1;
      let day = 1;
      for (const item of this.state.dataToEdit) {
        switch (item.length) {
          case 1:
            day = "0" + item;
            break;
          case 2:
            day = item;
            break;
          case 3:
            month = MONTHSNUM[MONTHS.indexOf(item)];
            break;
          case 4:
            year = item;
            break;
          default:
            year = 1900;
            month = day = 1;
        }
        return "" + month + "/" + day + "/" + year;
      }
    } else if (this.state.dataToEdit.length === 1) {
      return this.state.dataToEdit[0];
    }
  }

  // 点击取消更新modal中的modalVisible状态
  closeModal = () => {
    this.props.changeModalVisible(false);
  };

  confirm = () => {
    this.props.changeModalVisible(false);
    const mapData = new Map();
    mapData.set(this.state.selectedField, this.processInputData());

    console.log(mapData);

    this.props.getDataToEdit(mapData);
  };

  maskClick = () => {
    this.props.changeModalVisible(false);
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
              items={FIELDS}
            />
            {this.state.showType === MODAL.STATUS && (
              <DropdownList
                className="dropdown-list2"
                hint="Please select a status"
                getInputData={this.getInputData}
                items={LEAD_STATUS}
              />
            )}
            {this.state.showType === MODAL.OTHER && (
              <StringInput getInputData={this.getInputData} />
            )}

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

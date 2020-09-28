import React, { Component } from "react";
import "./SelectModal.scss";
import DropdownList from "./components/DropdownList";
import StringInput from "./components/StringInput";
import generateArray from '../../tableServices/generateArray';
import {
  testPhoneNum,
  testEmailAddr,
  testEmptyString,
  testDate,
} from "../../tableServices/validation";

/* ======================Define all Options for Dropdown======================================= */
const MODAL = {
  OTHER: "OTHER",
  DATE: "DATE",
  STATUS: "STATUS",
  EMPTY: null,
};

const FIELDS = [
  "",
  "Name",
  "Email",
  "Phone number",
  "Contact owner",
  "Associated company",
  "Last activity date",
  "Lead status",
  "Create date",
];

const FIELDS_MAP_TO_KEYS = new Map([
  ["Name", "name"],
  ["Email", "email"],
  ["Phone number", "phoneNumber"],
  ["Contact owner", "contactOwner"],
  ["Associated company", "associatedCompany"],
  ["Last activity date", "LastActivityDate"],
  ["Lead status", "leadStatus"],
  ["Create date", "createDate"],
]);

const LEAD_STATUS = [
  "",
  "New",
  "Open",
  "In progress",
  "Open deal",
  "Unqualified",
  "Attempted to contact",
  "Connected",
  "Bad timing",
];

const DAYS = [""].concat(generateArray(1, 31));
const YEARS = [""].concat(generateArray(1900, 2020));
const MONTHSNUM = generateArray(1, 12);
const MONTHS = [
  "",
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
  "Dec",
];


class SelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedField: "",
      showType: MODAL.EMPTY,
      singleDataToEdit: "",
      dateToEdit: new Map([
        ["day", ""],
        ["month", ""],
        ["year", ""],
      ]),
    };
  }

  /* ======================Get Which Field to Operate======================================= */
  getSelectedField = (field) => {
    this.setState({ selectedField: field });
    this.getType();
  };

  selectType(target) {
    this.setState({
      showType: target,
    });
  }

  getType = () => {
    if (
      this.state.selectedField === "Name" ||
      this.state.selectedField === "Email" ||
      this.state.selectedField === "Phone number" ||
      this.state.selectedField === "Contact owner" ||
      this.state.selectedField === "Associated company"
    ) {
      this.selectType(MODAL.OTHER);
    } else if (
      this.state.selectedField === "Last activity date" ||
      this.state.selectedField === "Create date"
    ) {
      this.selectType(MODAL.DATE);
    } else if (this.state.selectedField === "Lead status") {
      this.selectType(MODAL.STATUS);
    } else {
      this.selectType(MODAL.EMPTY);
    }
  };

  /* ======================Get Processed Data according to Selected Field======================================= */
  getInputData = (data) => {
    if (
      this.state.showType !== MODAL.DATE &&
      this.state.showType !== MODAL.EMPTY
    ) {
      //
      this.setState({ singleDataToEdit: data, dateToEdit: [] });
    } else if (this.state.showType === MODAL.DATE) {
      //
      const curData = this.processDateData(data);
      let temp = this.state.dateToEdit;
      temp.set(Object.keys(curData)[0], Object.values(curData)[0]);
      this.setState({ dateToEdit: temp });
    } else {
      //
      this.setState({ singleDataToEdit: "", dateToEdit: [] });
    }
  };

  processDateData(data) {
    let result = "";
    let cur = data.toString();
    switch (cur.length) {
      case NaN:
      case "":
        break;
      case 1:
        result = { day: "0" + data };
        break;
      case 2:
        result = { day: data };
        break;
      case 3:
        let month = MONTHSNUM[MONTHS.indexOf(data) - 1];
        if (Number(month) <= 10) {
          month = "0" + month;
        }
        result = { month: month };
        break;
      case 4:
        result = { year: data };
        break;
      default:
        throw Error("Invalid input!");
    }
    return result;
  }

  /* ======================Handle 2 Buttons and Mask Clicking======================================= */
  closeModal = () => {
    this.props.changeModalVisible(false);
  };

  maskClick = () => {
    this.props.changeModalVisible(false);
  };

  confirm = () => {
    this.props.changeModalVisible(false);
    let currentData = null;
    const selectedField = FIELDS_MAP_TO_KEYS.get(this.state.selectedField);
    const showType = this.state.showType;
    // Use a map to restore input data
    const mapData = new Map();
    // Get input data from selected field. Two types of data: <input> & dropdown
    if (this.state.singleDataToEdit.length === 0) {
      currentData = this.state.dateToEdit;
    } else {
      currentData = this.state.singleDataToEdit;
    }
    // Validate if input data is legal
    if (selectedField === "phoneNumber" && testPhoneNum(currentData)) {
      mapData.set(selectedField, currentData);
    } else if (selectedField === "email" && testEmailAddr(currentData)) {
      mapData.set(selectedField, currentData);
    } else if (
      (showType === MODAL.OTHER || showType === MODAL.STATUS) &&
      testEmptyString(currentData)
    ) {
      mapData.set(selectedField, currentData);
    } else if (
      showType === MODAL.DATE &&
      testDate(
        currentData.get("month") +
          "/" +
          currentData.get("day") +
          "/" +
          currentData.get("year")
      )
    ) {
      currentData =
        currentData.get("month") +
        "/" +
        currentData.get("day") +
        "/" +
        currentData.get("year");
      mapData.set(selectedField, currentData);
    }
    // Pass input data to father component
    this.props.getDataToEdit(mapData);
  };

  render() {
    return (
      <div className="modal-wrapper">
        {
          <div className="modal">
            <DropdownList
              className="dropdown-list-selection"
              hint="Please select a field"
              getSelectedField={this.getSelectedField}
              items={FIELDS}
            />
            {this.state.showType === MODAL.STATUS && (
              <DropdownList
                className="dropdown-list-single"
                hint="Please select a status"
                getInputData={this.getInputData}
                items={LEAD_STATUS}
              />
            )}
            {this.state.showType === MODAL.OTHER && (
              <StringInput
                getInputData={this.getInputData}
                selectedField={this.state.selectedField}
              />
            )}
            {this.state.showType === MODAL.DATE && (
              <>
                <DropdownList
                  className="dropdown-list-triple1"
                  hint="Day"
                  getInputData={this.getInputData}
                  items={DAYS}
                />
                <DropdownList
                  className="dropdown-list-triple2"
                  hint="Month"
                  getInputData={this.getInputData}
                  items={MONTHS}
                />
                <DropdownList
                  className="dropdown-list-triple3"
                  hint="Year"
                  getInputData={this.getInputData}
                  items={YEARS}
                />
              </>
            )}

            <div className="modal-operator">
              <button
                className="modal-operator-close"
                onClick={this.closeModal}
              >
                Cancel
              </button>
              <button className="modal-operator-confirm" onClick={this.confirm}>
                Confirm
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
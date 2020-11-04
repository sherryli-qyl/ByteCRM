import React, { Component } from 'react';
import './SelectModal.scss';
import DropdownList from './components/DropdownList';
import StringInput from './components/StringInput';
import processDate from '../../../../../../../../lib/tableLibs/processDate';
import generateArray from '../../../../../../../../lib/tableLibs/generateArray';
import {
  testPhoneNum,
  testEmailAddr,
  testEmptyString,
  testDate,
} from '../../../../../../../../lib/tableLibs/validation';

/* ======================Define all Options for Dropdown======================================= */
const CONTACT_FIELDS = [
  '',
  'Name',
  'Email',
  'Phone number',
  // "Contact owner",
  // "Associated company",
  'Last activity date',
  'Lead status',
  // "Create date",
];

const COMPANY_FIELDS = [
  '',
  'Name',
  'Phone number',
  // "Company owner",
  // "Associated contacts",
  'Last logged call date',
  'City',
  'Country',
  'Industry',
];

const FIELD_TO_KEY = {
  Name: 'name',
  Email: 'email',
  'Phone number': 'phoneNo',
  // "Contact owner": "contactOwner",
  // "Associated company": "company",
  'Last activity date': 'lastActivityDate',
  'Lead status': 'leadStatus',
  // "Create date": "createDate",
  'Last logged call date': 'lastLoggedCallDate',
  City: 'city',
  Country: 'country',
  Industry: 'industry',
};

const VALIDATE_FUNC = {
  'Last activity date': testDate,
  'Phone number': testPhoneNum,
  Email: testEmailAddr,
};

const LEAD_STATUS = [
  '',
  'New',
  'Open',
  'In progress',
  'Open deal',
  'Unqualified',
  'Attempted to contact',
  'Connected',
  'Bad timing',
];

const DAYS = [''].concat(generateArray(1, 31));
const YEARS = [''].concat(generateArray(1900, 2020));
const MONTHS = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

class SelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      isEmpty: false,
      selectedField: '',
      singleDataToEdit: '',
      dateToEdit: new Map([
        ['day', ''],
        ['month', ''],
        ['year', ''],
      ]),
    };
  }

  /* ======================Get Processed Data according to Selected Field======================================= */
  getInputData = (data) => {
    if (
      this.state.selectedField !== 'Last activity date'
      && this.state.selectedField !== 'Last logged call date'
      && this.state.selectedField !== ''
    ) {
      this.setState({ singleDataToEdit: data, dateToEdit: [] });
    } else if (
      this.state.selectedField === 'Last activity date'
      || this.state.selectedField !== 'Last logged call date'
    ) {
      const curData = processDate(data);
      const temp = this.state.dateToEdit;
      temp.set(Object.keys(curData)[0], Object.values(curData)[0]);
      this.setState({ dateToEdit: temp });
    } else {
      this.setState({ singleDataToEdit: '', dateToEdit: [] });
    }
  };

  getSelectedField = (field) => {
    this.setState((prevState) => {
      if (prevState.selectedField !== field) {
        return {
          selectedField: field,
          isEmpty: false,
          isValid: true,
          dateToEdit: new Map([
            ['day', ''],
            ['month', ''],
            ['year', ''],
          ]),
          singleDataToEdit: '',
        };
      }
    });
  };

  /* ======================Handle 2 Buttons and Mask Clicking======================================= */
  closeModal = () => {
    this.props.changeModalVisible(false);
  };

  maskClick = () => {
    this.props.changeModalVisible(false);
  };

  handleReceivedData = (field, value, mapData) => {
    if (
      field === 'Last activity date'
      || field === 'Last logged call date'
      || field === 'Phone number'
      || field === 'Email'
    ) {
      if (field === 'Last activity date' || field === 'Last logged call date') {
        value = value
          ? `${value.get('day')
            }/${
            value.get('month')
            }/${
            value.get('year')}`
          : undefined;
      }
      if (testEmptyString(value)) {
        this.setState({
          isEmpty: true,
          isValid: false,
        });
      } else if (VALIDATE_FUNC[field](value)) {
        mapData.set(field, value);
        this.setState({
          isEmpty: false,
          isValid: true,
        });
      } else {
        this.setState({
          isEmpty: false,
          isValid: false,
        });
      }
    } else if (field === 'Name') {
      if (testEmptyString(value)) {
        this.setState({
          isEmpty: true,
          isValid: false,
        });
      } else {
        mapData.set(field, value);
        this.setState({
          isEmpty: false,
          isValid: true,
        });
      }
    } else {
      mapData.set(field, value);
      this.setState({
        isEmpty: false,
        isValid: true,
      });
    }
  };

  confirm = () => {
    let currentData = '';
    const { selectedField } = this.state;
    if (!selectedField) {
      this.props.changeModalVisible(false);
      return;
    }
    // Use a map to restore input data
    const mapData = new Map();
    currentData = this.state.selectedField === 'Last activity date'
      || this.state.selectedField === 'Last logged call date'
        ? this.state.dateToEdit
        : this.state.singleDataToEdit;
    this.handleReceivedData(selectedField, currentData, mapData);
    // Pass input data to father component
    setTimeout(() => {
      if (!this.state.isEmpty && this.state.isValid) {
        const iterator = mapData.keys();
        const key = iterator.next().value;
        if (this.props.type === 'company' && key === 'Phone number') {
          mapData.set('phoneNumber', mapData.get(key));
        } else {
          mapData.set(FIELD_TO_KEY[key], mapData.get(key));
        }
        mapData.delete(key);
        if (this.props.type === 'contact' && mapData.keys().next().value === 'name') {
          const tempName = mapData.values().next().value.split(' ');
          mapData.set('firstName', tempName[0]);
          mapData.set(
            'lastName',
            tempName.length > 1 ? tempName[1] : undefined,
          );
        }
        this.props.getDataToEdit(Object.fromEntries(mapData));
        this.props.changeModalVisible(false);
      }
    }, 500);
  };

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <DropdownList
            className="dropdown-list-selection"
            hint="Please select a field"
            getSelectedField={this.getSelectedField}
            items={
                this.props.type === 'contact' ? CONTACT_FIELDS : COMPANY_FIELDS
              }
          />
          {this.state.selectedField === 'Lead status' && (
          <DropdownList
            className="dropdown-list-single"
            hint="Please select a status"
            getInputData={this.getInputData}
            items={LEAD_STATUS}
          />
            )}
          {(this.state.selectedField === 'Name'
              || this.state.selectedField === 'Phone number'
              || this.state.selectedField === 'Email'
              || this.state.selectedField === 'City'
              || this.state.selectedField === 'Country'
              || this.state.selectedField === 'Industry') && (
              <StringInput
                getInputData={this.getInputData}
                selectedField={this.state.selectedField}
                isEmpty={this.state.isEmpty}
                isValid={this.state.isValid}
              />
            )}
          {(this.state.selectedField === 'Last activity date'
              || this.state.selectedField === 'Last logged call date') && (
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
        <div className="mask" onClick={this.maskClick} />
      </div>
    );
  }
}

export default SelectModal;

import React from 'react';
import Dropdown from '../../../Dropdown';

import './StageDropDown.scss';

class StageDropDown extends React.Component {
  constructor(props) {
    super(props);
    const { currentValue, size } = this.props;
    const dropdownList = [
      { key: 0, value: 'Appointment Scheduled' },
      { key: 1, value: 'Qualified to Buy' },
      { key: 2, value: 'Presentation Scheduled' },
      { key: 3, value: 'Decision Maker Bought-In' },
      { key: 4, value: 'Contract Sent' },
      { key: 5, value: 'Closed won' },
      { key: 6, value: 'Closed lost' }];

    this.state = {
      dropdownList,
      currentValue,
      size,
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(value) {
    console.log(value);
    this.setState({
      currentValue: value,
    });
    this.props.handleUpdate(value);
  }

  render() {
    const { currentValue, dropdownList, size } = this.state;
    return (
      <div className="stageDropDown">
        <Dropdown
          value={currentValue}
          size = {size}
          onChangeValue={this.onChangeValue}
          selectItems={dropdownList}
        />
      </div>
    );
  }
}

export default StageDropDown;

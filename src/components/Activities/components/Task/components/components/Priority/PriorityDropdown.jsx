import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../../../../../Dropdown';

class PriorityDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    let currentValue = '';
    defaultValue ? currentValue = defaultValue : currentValue = false;

    const StyledPriority = styled.div`
      color: #33475b;
      display:flex;
      align-items:center;
      &::before{
        content: " ";
        background:red;
        margin-right:8px;
        border-radius:10px;
        height:10px;
        width:10px;
      }
      `;

    const selectItems = [
      { key: 0, value: 'None' },
      {
        key: 1,
        value: 'high',
        display:
  <StyledPriority>
    high
  </StyledPriority>,
      }];

    this.state = {
      selectItems,
      currentValue,
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(priority) {
    this.setState({
      currentValue: priority,
    });
    this.props.onPriorityChange(priority);
  }

  render() {
    const { selectItems, currentValue } = this.state;
    return (
      <Dropdown
        value={currentValue}
        onChangeValue={this.onChangeValue}
        selectItems={selectItems}
      />
    );
  }
}

export default PriorityDropdown;

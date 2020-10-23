import React from 'react';
import Dropdown from '../../../../../../Dropdown';

class TypeDropdown extends React.Component {
  constructor(props) {
    super(props);
    const {defaultValue} = this.props;
    let currentValue = '';
    defaultValue ? currentValue = defaultValue : currentValue = false;

    const selectItems = [
      { value: 'To-do', key: 0 },
      { value: 'Call', key: 1 },
      { value: 'Email', key: 2 }
    ]
    this.state = {
      selectItems,
      currentValue,
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(type) {
    this.setState({
      currentValue: type,
    })
    this.props.onTypeChange(type);
  }
  
  render() {
    const { selectItems, currentValue } = this.state;
    return(
      <Dropdown
        value={currentValue}
        onChangeValue={this.onChangeValue}
        selectItems={selectItems}
      />
    )

  }
}

export default TypeDropdown;
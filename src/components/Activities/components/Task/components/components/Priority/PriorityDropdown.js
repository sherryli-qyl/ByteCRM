import React from 'react';
import Dropdown from '../../../../../../Dropdown';

class PriorityDropdown extends React.Component {
  constructor(props) {
    super(props);
    const {defaultValue} = this.props;
    let currentValue = '';
    defaultValue ? currentValue = defaultValue : currentValue = false;

    const selectItems = [
      { key: 0, value: 'None'  },
      { key: 1, value: 'High', highPriority:'highPriority'}]

    this.state = {
      selectItems,
      currentValue,
    }

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(priority){
    this.setState({
      currentValue: priority,
    })
    this.props.onPriorityChange(priority);
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

export default PriorityDropdown;
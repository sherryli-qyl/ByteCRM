import React from 'react';
import Dropdown from '../../../../../../../../../Dropdown';
import { dueDateCalculator } from '../../../../../../../../../../lib/date';

class TaskSelect extends React.Component {
  constructor(props) {
    super(props);
    const selectItems = [
      { key: 'Today', value: 0, display: 'Today' },
      { key: 'Tomorrow ', value: 1, display: 'Tomorrow' },
      { key: 'in 1 business days ', value: 1, display: '' },
      { key: 'in 2 business days ', value: 2, display: '' },
      { key: 'in 3 business days ', value: 3, display: '' },
      { key: 'in 1 week ', value: 7, display: '' },
      { key: 'in 2 weeks ', value: 14, display: '' },
      { key: 'in 1 month ', value: 30 },
    ];
    
    this.state = {
      currentValue:selectItems[0].display,
      selectItems,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(value, key, item) {
    this.setState({
      currentValue: item.display,
    })
    this.props.onChangeValue(value)
}
 
componentDidMount(){
  const selectItems = dueDateCalculator(this.state.selectItems); 
  this.setState({
    selectItems: selectItems,
  })
}

  render() {
    const { selectItems,currentValue } = this.state;
    return (
      <div>
        <Dropdown
          value = {currentValue}
          variant="bottom"
          onChangeValue={this.onChangeValue}
          selectItems={selectItems}
        />
      </div>
    );
  }
}

export default TaskSelect;

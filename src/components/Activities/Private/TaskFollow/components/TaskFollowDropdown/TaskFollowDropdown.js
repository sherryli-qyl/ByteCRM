import React from 'react';
import { addDate } from '../../../../../../lib/date';
import Dropdown from '../../../../../Dropdown';
import './TaskFollowDropDown.scss';

class TaskFollowDropdown extends React.Component {
    constructor(props) {
        super(props);
        const selectItems = [
            { key: 'Today', value: 0, display: 'Today' },
            { key: 'Tomorrow ', value: 1, display: 'Tomorrow' },
            { key: 'in 2 business days ', value: 2, display: 'in 2 business days' },
            { key: 'in 3 business days ', value: 3, display: 'in 3 business days' },
            { key: 'in 1 week ', value: 7, display: 'in 1 week' },
            { key: 'in 2 weeks ', value: 14, display: 'in 2 weeks' },
            { key: 'in 1 month ', value: 30, display: 'in 1 month' },
        ];

        this.state = {
            defaultValue: 3,
            selectItems,
            currentValue: '',
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(value, key) {
        const newValue = `${key} ${addDate(value)}`;
        this.updateValue(newValue);
    }

    updateValue(value) {
        this.setState({
            currentValue: value,
        });
    }

    render() {
        const { selectItems, currentValue, defaultValue } = this.state;

        let value = currentValue;
        if (!value) {
            value = `${selectItems[defaultValue].key} ${addDate(selectItems[defaultValue].value)}`;
        }

        return (
          <div>
            <Dropdown
              value={value}
              variant="above"
              onChangeValue={this.onChangeValue}
              selectItems={selectItems}
            />
          </div>
        );
    }
}

export default TaskFollowDropdown;

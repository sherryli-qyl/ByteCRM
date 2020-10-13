import React from 'react';
import Dropdown from '../../../../../../Dropdown';



class TypeDropdown extends React.Component {
    constructor(props) {
        super(props);

        const {defaultValue} = this.props;
        let currentValue = '';
        defaultValue ? currentValue = defaultValue : currentValue = 0;

        const selectItems = [
            { value: 'To-do', key: 0 },
            { value: 'Call', key: 1 },
            { value: 'Email', key: 2 }]
        this.state = {
            selectItems,
            currentValue,
        }
    }

    onChange(index) {
        this.setState({
            currentValue: index
        })

    }

    render() {
        const { selectItems, currentValue } = this.state;
        return (
            <Dropdown
                value={currentValue}
                selectItems={selectItems}
            />
        )
    }
}

export default TypeDropdown;
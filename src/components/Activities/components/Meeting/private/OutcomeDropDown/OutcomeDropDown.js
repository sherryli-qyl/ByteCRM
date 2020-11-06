import React from 'react';
import Dropdown from '../../../../../Dropdown';



class OutcomeDropDown extends React.Component {
    constructor(props) {
        super(props);
        const {defaultValue} = this.props;
        let currentValue = '';
        defaultValue ? currentValue = defaultValue : currentValue = false;

        const selectItems = [
            { value: 'None', key: 0 },
            { value: 'Scheduled', key: 1 },
            { value: 'Completed', key: 2 },
            { value: 'Rescheduled', key: 3 },
            { value: 'No show', key: 4 },
            { value: 'Canceled', key: 5 }]
        this.state = {
            selectItems,
            currentValue,
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(outcome) {
        this.setState({
            currentValue: outcome
        })
        this.props.onOutcomeChange(outcome)

    }

    render() {
        const { selectItems, currentValue } = this.state;
        return (
            <Dropdown
                value={currentValue}
                onChangeValue = {this.onChangeValue}
                selectItems={selectItems}
            />
        )
    }
}

export default OutcomeDropDown;
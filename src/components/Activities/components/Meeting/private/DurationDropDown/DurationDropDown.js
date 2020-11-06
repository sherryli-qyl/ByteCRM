import React from 'react';
import Dropdown from '../../../../../Dropdown';



class DurationDropDown extends React.Component {
    constructor(props) {
        super(props);
        const {defaultValue} = this.props;
        let currentValue = '';
        defaultValue ? currentValue = defaultValue : currentValue = false;

        const selectItems = [
            { value: '30 mins', key: 0 },
            { value: '1 hour', key: 1 },
            { value: '2 hours', key: 2 },
            { value: '2.5 hours', key: 3 },
            { value: '3 hours', key: 4 },
            { value: '3.5 hours', key: 5 },
            { value: '4 hours', key: 6 },
            { value: '4.5 hours', key: 7 },
            { value: '5 hours', key: 8 }]
        this.state = {
            selectItems,
            currentValue,
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(duration) {
        this.setState({
            currentValue: duration
        })
        this.props.onDurationChange(duration)

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

export default DurationDropDown;
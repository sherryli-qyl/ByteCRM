import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Dropdown from '../../../../../../../../../Style/Dropdown';
import { addWeekDay } from '../../../../../../../../../services/DateManager';
import DueDateTheme from './theme';



class TaskSelect extends React.Component {
    constructor(props) {
        super(props);
        const selectItems = [
            { key: 'Today', value: 0, date: '' },
            { key: 'Tomorrow ', value: 1, date: '' },
            { key: 'in 2 business days ', value: 2, date: '' },
            { key: 'in 3 business days ', value: 3, date: '' },
            { key: 'in 1 week ', value: 7, date: '' },
            { key: 'in 2 weeks ', value: 14, date: '' },
            { key: 'in 1 month ', value: 30 },
        ];
        const theme = DueDateTheme;
        this.state = {
            timeValue: 3,
            selectItems: selectItems,
            theme,
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(e) {
        this.updateValue(e.target.value);
    }

    updateValue(selectedValue) {
        this.setState({
            timeValue: selectedValue,
        });
    }

    render() {
        const { selectItems, theme } = this.state;
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Dropdown dropdownItems={selectItems}
                        transfer={true}
                        transferKey={addWeekDay}
                    />
                </ThemeProvider>
            </div>
        );
    }
}

export default TaskSelect;
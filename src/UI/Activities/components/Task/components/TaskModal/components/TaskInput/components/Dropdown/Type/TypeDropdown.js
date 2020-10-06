import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import DropdownTheme from './theme';
import Dropdown from '../../../../../../../../../../Style/Dropdown';



class TypeDropdown extends React.Component {
    constructor(props) {
        super(props);
        const theme = DropdownTheme;
        const dropDownItems = [{ key: 'Call', value: 3 },
        { key: 'To-do', value: 0 },
        { key: 'Email', value: 2 },]
        this.state = {
            dropDownItems,
            theme
        }
    }

    render() {
        const { dropDownItems, theme } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <Dropdown dropdownItems={dropDownItems}
                />
            </ThemeProvider>
        )
    }
}

export default TypeDropdown;
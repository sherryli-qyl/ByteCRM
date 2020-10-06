import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import PriorityTheme from './theme';
import Dropdown from '../../../../../../../../../../Style/Dropdown';
import './PriorityDropdown.scss';



class PriorityDropdown extends React.Component {
    constructor(props) {
        super(props);
        const theme = PriorityTheme;
        const priorityItems = [{ key: 'None', value: 0,  },
                               { key: 'High', value: 1,type:'highPriority'}]
        this.state = {
            priorityItems,
            theme
        }
    }

    render() {
        const { priorityItems, theme } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <Dropdown dropdownItems={priorityItems}
                />
            </ThemeProvider>
        )
    }
}

export default PriorityDropdown;
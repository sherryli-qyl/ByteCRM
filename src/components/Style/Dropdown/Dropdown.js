import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import dropdownTheme from './theme/';
import './TaskFollow.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        const selectItems = this.props.items;
        const theme =dropdownTheme;
        const 
        this.state = {
            currentValue,
            selectItems,
            theme,
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);

    }

    handleSelectChange(e) {
        this.updateValue(e.target.value);
    }

    updateValue(selectedValue) {
        this.setState({
            currentValue: selectedValue,
        });
    }

    render() {
        const {selectItems,currentValue,theme} = this.state;
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Select
                        //disableUnderline
                        value={currentValue}
                        variant='standard'
                        onChange={this.handleSelectChange}
                        defaultValue={3}
                        className={"taskFollow__select__input"}
                    >
                        {selectItems.map((item) => (
                            <MenuItem
                                key={item.key}
                                value={item.value}>
                                {item.key + `(${addDate(item.value)})`}
                            </MenuItem>
                        ))}
                    </Select>
                </ThemeProvider>
            </div>
        );
    }
}

export default Dropdown;
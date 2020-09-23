import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        const selectItems = this.props.dropdownItems;
       
        this.state = {
            currentValue:0,
            selectItems,
          
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
        const {selectItems,currentValue} = this.state;
        return (
            <div>
                
                    <Select
                        //disableUnderline
                        value={currentValue}
                        variant='standard'
                        onChange={this.handleSelectChange}
                        defaultValue={0}
                        className={"taskFollow__select__input"}
                    >
                        {selectItems.map((item) => (
                            <MenuItem
                                key={item.key}
                                className={item.type}
                                value={item.value}>    
                          {this.props.transfer?
                            item.key + `(${this.props.transferKey(item.value)})`
                            :
                            item.key
                           }          
                            </MenuItem>
                        ))}
                    </Select>
               
            </div>
        );
    }
}

export default Dropdown;
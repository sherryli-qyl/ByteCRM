import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import './Dropdown.scss';



class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInput: false,
            


        }
    }


    render() {
        const {showDropdown} = this.props;
        let className = "dropdown "
        if (showDropdown) {
            className += "dropdown__active"
        }

        return (
            <div className={className}>
                <div className='dropdown__corner' />
                <div className='dropdown__inner'>
                    <div className='dropdown__inner__wrapper'>
                        <SearchBar />
                    </div>
                    <Select label={'Contacts'}
                        handleRemoveContact={this.props.handleRemoveContact}
                        handleAddContact={this.props.handleAddContact}
                        contactList={this.props.contactList} />
                </div>
            </div>

        )
    }
}

export default Dropdown;
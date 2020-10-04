import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import './Dropdown.scss';



const Dropdown = ({
    showDropdown,
    onBlur,
    children,
    contactList,
    handleRemoveContact,
    handleAddContact
}) => {
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
                         handleRemoveContact = {handleRemoveContact}
                         handleAddContact = {handleAddContact}
                         contactList = {contactList}/>
            </div>
        </div>
    )
}

export default Dropdown;
import React from 'react';
import SearchBar from '../../../SearchBar';
import Select from '../Select';
import Corner from './components/Corner';
import './Dropdown.scss';


const Dropdown = ({
    label,
    showDropdown,
    textInputHint,
    contactSelectHint,
    checkInput,
    contactList, 
    searchList, 
    loading,
    textInput,
    enableCleanBtn,
    handleInputChange,
    handleCleanInput,
    handleRemoveContact,
    handleAddContact,
}) => {

    let className = "contactDropdown "
    if (showDropdown) {
        className += "contactDropdown__active"
    }
    return (
        <div className={className}>
            <Corner variant ='topLeft'/>
            <div className='contactDropdown__inner'>
                <div className='contactDropdown__inner__wrapper'>
                    <SearchBar textInput={textInput}
                               enableCleanBtn={enableCleanBtn}
                               handleInputChange={handleInputChange}
                               handleCleanInput={handleCleanInput}
                               loading = {loading}
                               checkInput = {checkInput}
                               textInputHint = {textInputHint} />
                </div>
                {!checkInput ?
                    <Select label={label}
                            contactList = {contactList}
                            searchList = {searchList}
                            contactSelectHint = {contactSelectHint}
                            handleRemoveContact={handleRemoveContact}
                            handleAddContact={handleAddContact} />
                    :
                  ""
                }
            </div>
        </div>
    )
}


export default Dropdown;
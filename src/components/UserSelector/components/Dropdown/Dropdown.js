import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import HintBar from '../HintBar';
import Loading from '../../../Loading';
import './Dropdown.scss';


const Dropdown = ({
    showDropdown,
    textInputHint,
    checkInput,
    userList, 
    searchList, 
    loading,
    textInput,
    enableCleanBtn,
    handleInputChange,
    handleCleanInput,
    handleRemoveUser,
    handleAddUser,
    contactSelectHint
}) => {

    let className = "contactDropdown "
    if (showDropdown) {
        className += "contactDropdown__active"
    }
    return (
        <div className={className}>
            <div className='contactDropdown__corner' />
            <div className='contactDropdown__inner'>
                <div className='contactDropdown__inner__wrapper'>
                    <SearchBar textInput={textInput}
                        enableCleanBtn={enableCleanBtn}
                        handleInputChange={handleInputChange}
                        handleCleanInput={handleCleanInput} />
                </div>
                {!checkInput ?
                    <Select label={'Contacts'}
                            userList = {userList}
                            searchList = {searchList}
                            contactSelectHint = {contactSelectHint}
                            handleRemoveUser={handleRemoveUser}
                            handleAddUser={handleAddUser} />
                    :
                    loading ?
                        <Loading variant="bar" />
                        :
                        <HintBar>
                            {textInputHint}
                        </HintBar>
                }
            </div>
        </div>
    )
}


export default Dropdown;
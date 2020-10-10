import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import HintBar from '../HintBar';
import Loading from '../../../Loading';
import './Dropdown.scss';


const Dropdown = ({
    showDropdown,
    hintMessage,
    checkInput,
    currentList,
    loading,
    textInput,
    enableCleanBtn,
    handleInputChange,
    handleCleanInput,
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
                    <SearchBar textInput={textInput}
                        enableCleanBtn={enableCleanBtn}
                        handleInputChange={handleInputChange}
                        handleCleanInput={handleCleanInput} />
                </div>
                {!checkInput ?
                    <Select label={'Contacts'}
                        currentList={currentList}
                        handleRemoveContact={handleRemoveContact}
                        handleAddContact={handleAddContact} />
                    :
                    loading ?
                        <Loading variant="bar" />
                        :
                        <HintBar>
                            {hintMessage}
                        </HintBar>
                }
            </div>
        </div>
    )
}


export default Dropdown;
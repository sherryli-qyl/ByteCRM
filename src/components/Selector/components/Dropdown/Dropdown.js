import React from 'react';
import SearchBar from '../../../SearchBar';
import Select from '../../ContactSelector/components/Select';
import Corner from './components/Corner';
import './Dropdown.scss';


const Dropdown = ({
    showDropdown,
    textInputHint,
    select,
    corner,
    checkInput,
    loading,
    textInput,
    placeholder,
    enableCleanBtn,
    handleInputChange,
    handleCleanInput,
}) => {

    let className = "selectorDropdown "
    if (showDropdown) {
        className += "selectorDropdown__active"
    }
    return (
        <div className={className}>
            <Corner variant ={corner}/>
            <div className='selectorDropdown__inner'>
                <div className='selectorDropdown__inner__wrapper'>
                    <SearchBar textInput={textInput}
                               placeholder = {placeholder}
                               enableCleanBtn={enableCleanBtn}
                               handleInputChange={handleInputChange}
                               handleCleanInput={handleCleanInput}
                               loading = {loading}
                               checkInput = {checkInput}
                               textInputHint = {textInputHint} />
                </div>
                {!checkInput ?
                   select
                    :
                  ""
                }
            </div>
        </div>
    )
}


export default Dropdown;
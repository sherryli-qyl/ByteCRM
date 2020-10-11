import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import './SelectItem.scss';



const SelectItem = ({
    contact, 
    contactID, 
    disabled, 
    checked,
    handleRemoveContact,
    handleAddContact,
}) => {
    let btnClassName = "selectItem__left__checkbox__btn "

    if (disabled) {
        btnClassName += "selectItem__left__checkbox__btn__disabled"
    }
    return (
        <div className='selectItem'>
            <div className='selectItem__left'>
                {checked ?
                    <div className='selectItem__left__checkbox' >
                        <button
                            className={btnClassName}
                            disabled={disabled}
                            onClick={event => {
                                event.preventDefault();
                                handleRemoveContact(contactID);
                            }}>
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </button>
                    </div>
                    :
                    <div className='selectItem__left__square'
                        onClick={event => {
                            event.preventDefault();
                            handleAddContact(contact);
                        }} />
                }
            </div>
            <div className='selectItem__right'>
                {`${contact.fullName} (${contact.email})`}
            </div>
        </div>
    )
}
export default SelectItem;
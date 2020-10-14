import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import HintBox from '../../.././../../HintBox';
import './SelectItem.scss';



const SelectItem = ({
    contact,
    contactID,
    disabled,
    checked,
    handleRemoveContact,
    handleAddContact,
    contactSelectHint
}) => {
    let btnClassName = "contactSelectItem__left__checkbox__btn "

    if (disabled) {
        btnClassName += "contactSelectItem__left__checkbox__btn--disabled"
    }
    return (
        <div className='contactSelectItem'>
            <div className='contactSelectItem__left'>
                {checked ?
                    <div className='contactSelectItem__left__checkbox' >
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
                    <div className='contactSelectItem__left__square'
                        onClick={event => {
                            event.preventDefault();
                            handleAddContact(contact);
                        }} />
                }
            </div>
            <div className='contactSelectItem__right'>
                {`${contact.fullName} (${contact.email})`}
            </div>
            {disabled ?
                <div className="contactSelectItem__hint">
                    <HintBox variant='topRight'>{contactSelectHint}</HintBox>
                </div>
                :
                ""
            }
        </div>
    )
}
export default SelectItem;
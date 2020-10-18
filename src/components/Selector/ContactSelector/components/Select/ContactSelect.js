import React from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import { CheckOneContact } from '../../../../../utils/SearchContact/SearchContact';
import './ContactSelect.scss';


const ContactSelect = (props) => {
    const { selectList, searchList, label } = props;

    let currentList = []

    selectList ? currentList = selectList : currentList = [];

    if (searchList && searchList.length > 0) {
        currentList = searchList
    }

    return (
        <div className="searchResultSelect">
            <div className="searchResultSelect__title">
                <span className="searchResultSelect__title__text">
                    {label}
                </span>
            </div>
            {
                currentList.map(item => {
                    const oneContactId = CheckOneContact(selectList, currentList);
                    let disabled = false;
                    if (oneContactId && oneContactId === item.contact._id) {
                        disabled = true
                    }
                    return (
                        <SelectItem
                            key={item.contact._id}
                            contactID={item.contact._id}
                            contact={item.contact}
                            checked={item.checked}
                            disabled={disabled}
                            selectHint={props.selectHint}
                            handleRemoveContact={props.handleRemoveContact}
                            handleAddContact={props.handleAddContact}>
                        </SelectItem>
                    )
                })
            }
        </div>
    )
}

export default ContactSelect;
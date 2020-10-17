import React from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import {CheckOneContact} from '../../../../utils/SearchContact/SearchContact';
import './ContactSelect.scss';



const ContactSelect = (props) => {
    const { contactList,searchList,label} = props;

    let currentList = contactList;

    if (searchList && searchList.length > 0){
        currentList = searchList
    }

    return (
        <div className="contactSelect">
            <div className="contactSelect__title">
                <span className="contactSelect__title__text">
                    {label}
                </span>
            </div>
            {
                currentList.map(item => { 
                    const oneContactId = CheckOneContact(contactList,currentList);
                    let disabled = false;
                    if (oneContactId && oneContactId === item.contact._id){
                        disabled = true
                    }
                    return (
                        <SelectItem
                            key={item.contact._id}
                            contactID={item.contact._id}
                            contact={item.contact}
                            checked={item.checked}
                            disabled = {disabled}
                            contactSelectHint = {props.contactSelectHint}
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
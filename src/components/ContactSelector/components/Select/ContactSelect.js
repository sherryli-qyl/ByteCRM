import React from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import './ContactSelect.scss';



const ContactSelect=(props)=>{
        const { contactList, searchList,label} = props;
        let oneContact = false;

        if (contactList.length <= 1) {
            oneContact = true;
        }

        return (
            <div className="contactSelect">
                <div className="contactSelect__title">
                    <span className="contactSelect__title__text">
                        {label}
                    </span>
                </div>
                {searchList.length > 0 ?
                    searchList.map(item => {
                        return (
                            <SelectItem
                                key={item.contact._id}
                                contactID={item.contact._id}
                                contact={item.contact}
                                checked={item.checked}
                                oneContact={false}
                                handleRemoveContact={props.handleRemoveContact}
                                handleAddContact={props.handleAddContact}>
                            </SelectItem>
                        )
                    })
                    :
                    <React.Fragment>
                        {contactList.map(item => {
                            return (
                                <SelectItem
                                    key={item._id}
                                    contactID={item._id}
                                    contact={item}
                                    oneContact={oneContact}
                                    email={item.email}
                                    checked={true}
                                    handleRemoveContact={props.handleRemoveContact}
                                    handleAddContact={props.handleAddContact}>
                                </SelectItem>
                            )
                        })
                        }
                    </React.Fragment>
                }
            </div>
        )
    }

export default ContactSelect;
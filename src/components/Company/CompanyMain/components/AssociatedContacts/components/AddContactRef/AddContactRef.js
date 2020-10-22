import React from 'react';
import AddExistContact from './components/AddExistContact';
import SwitchButtonBar from '../../../../../../SwitchButtonBar';

import './AddContactRef.scss';



const AddContactRef = ({
    contactList,
    handleSelectedContacts,
}) => {

    const components = [{key:0,label:"Add existing contact",
                        component: <AddExistContact contactList = {contactList}
                                                    handleSelectedContacts ={handleSelectedContacts}/>},
                        {key:1,label:"Create a new contact",component:""}]


    return (
        <div className='addRef'>
            <div className='addRef__description'>
            Keep track of which contacts are part of this company.
            </div>
            <SwitchButtonBar components = {components}/>
        </div>
    )
}

export default AddContactRef;
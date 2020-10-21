import React from 'react';
import AddExistContact from './components/AddExistContact';
import SwitchButtonBar from '../../../../../../SwitchButtonBar';

import './AddContactRef.scss';



const AddContactRef = ({
    handleSelectedContact,
}) => {

    const components = [{key:0,label:"Add existing contact",
                        component: <AddExistContact handleSelectedContact ={handleSelectedContact}/>},
                        {key:1,label:"Create a new contact",component:""}]


    return (
        <div className='addContactRef'>
            <div className='addContactRef__description'>
                Keep track of which companies are related to this contact.
            </div>
            <SwitchButtonBar components = {components}/>
        </div>
    )
}

export default AddContactRef;
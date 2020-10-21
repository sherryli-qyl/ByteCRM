import React from 'react';
import ContactSelector from '../../../../../../../../Selector/ContactSelector';

import './AddExistContact.scss';

const AddExistContact =({
    handleSelectedCompany,
}) =>{

    return(
        <div>
            <ContactSelector handleSelectedCompany={handleSelectedCompany}/>
        </div>
    )
}

export default AddExistContact;
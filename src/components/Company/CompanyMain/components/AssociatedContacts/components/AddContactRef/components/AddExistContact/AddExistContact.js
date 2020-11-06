import React from 'react';
import ContactSelector from '../../../../../../../../Selector/ContactSelector';

import './AddExistContact.scss';

const AddExistContact = ({
  contactList,
  handleSelectedContacts,
}) => (
  <div>
    <ContactSelector
      contactList={contactList}
      handleSelectedContacts={handleSelectedContacts}
    />
  </div>
);

export default AddExistContact;

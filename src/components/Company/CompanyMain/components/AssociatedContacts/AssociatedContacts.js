import React from 'react';
// import Relationship from './components/Relationship';
import RelationCard from './components/RelationCard';
import ExpandBar from '../../../../ExpandBar';
import './AssociatedContacts.scss';

class AssociatedContacts extends React.Component {
  constructor(props) {
    super(props);
    const { company, associatedContacts } = this.props
    this.state = {
      contacts: associatedContacts,
      company: company,
    }
  }

  render() {
    const { contacts, company } = this.state;
    console.log(contacts);
    return (
      <div className="associatedContacts">
        <ExpandBar label={`Contacts (${contacts.length})`}
                   content={
            <RelationCard contacts={contacts}
                          company={company} />
          }/>
      </div>
    )
  }
}

export default AssociatedContacts;
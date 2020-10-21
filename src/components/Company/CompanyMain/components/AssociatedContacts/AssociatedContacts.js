import React from 'react';
import RelationCard from './components/RelationCard';
import ExpandBar from '../../../../ExpandBar';
import AddContactRef from './components/AddContactRef';
import { AddCompanyRef, RemoveCompanyRef } from '../../../../Api/Contact';
import './AssociatedContacts.scss';

class AssociatedContacts extends React.Component {
  constructor(props) {
    super(props);
    const { company, associatedContacts } = this.props
    this.state = {
      contacts: associatedContacts,
      company: company,
    }
    this.handleRemoveRef = this.handleRemoveRef.bind(this);
  }

  handleRemoveRef(contactId,companyId) {
    const data = RemoveCompanyRef(contactId, companyId);
    data.then(response => {
      if (response.statusText === "OK") {
        let newContacts = this.state.contacts;
        for (let i in newContacts){
          if (newContacts[i].id === contactId){
            newContacts.splice(i,1);
            console.log(newContacts);
          }
        }
        this.setState({
          contacts:newContacts
        })
        console.log("Remove company success");
      }
      else {
        console.log("Remove company failed");
      }
    })
  }

  render() {
    const { contacts, company } = this.state;
    let showDetail = false

    if(contacts.length > 0){
      showDetail = true;
    }

    const addModal = {
      title: 'Add companies to this contact',
      content: <AddContactRef handleSelectedCompany={this.handleSelectedCompany} />
    }

    return (
      <div className="associatedContacts">
        <ExpandBar label={`Contacts (${contacts.length})`}
                   showDetail={showDetail}
                   showAdd={true}
                   addModal={addModal}
                   content={
            <RelationCard contacts={contacts}
                          company={company}
                          handleRemoveRef = {this.handleRemoveRef} />
          }/>
      </div>
    )
  }
}

export default AssociatedContacts;
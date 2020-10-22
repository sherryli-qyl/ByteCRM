import React from 'react';
import RelationCard from './components/RelationCard';
import ExpandBar from '../../../../ExpandBar';
import AddContactRef from './components/AddContactRef';
import { AddCompanyRef, RemoveCompanyRef } from '../../../../Api/Contact';
import './AssociatedContacts.scss';

class AssociatedContacts extends React.Component {
  constructor(props) {
    super(props);
    const { company, contactList } = this.props
    this.state = {
      contactList: contactList,
      company: company,
      selectedContacts:contactList,
    }
    this.handleRemoveRef = this.handleRemoveRef.bind(this);
    this.handleSelectedContacts = this.handleSelectedContacts.bind(this);
  }


  handleSelectedContacts(contacts){
    this.setState({
      selectedContacts: contacts,
    })
  }

  handleRemoveRef(contactId,companyId) {
    const data = RemoveCompanyRef(contactId, companyId);
    data.then(response => {
      if (response.statusText === "OK") {
        let newContacts = this.state.contactList;
        for (let i in newContacts){
          if (newContacts[i].id === contactId){
            newContacts.splice(i,1);
            console.log(newContacts);
          }
        }
        this.setState({
          contactList:newContacts
        })
        console.log("Remove company success");
      }
      else {
        console.log("Remove company failed");
      }
    })
  }

  render() {
    const { contactList, company} = this.state;
    let showDetail = false

    if(contactList.length > 0){
      showDetail = true;
    }

    const addModal = {
      title: 'Add companies to this contact',
      content: <AddContactRef contactList = {contactList}
                              handleSelectedContacts={this.handleSelectedContacts} />
    }

    return (
      <div className="associatedContacts">
        <ExpandBar label={`Contacts (${contactList.length})`}
                   showDetail={showDetail}
                   showAdd={true}
                   addModal={addModal}
                   content={
            <RelationCard contacts={contactList}
                          company={company}
                          handleRemoveRef = {this.handleRemoveRef} />
          }/>
      </div>
    )
  }
}

export default AssociatedContacts;
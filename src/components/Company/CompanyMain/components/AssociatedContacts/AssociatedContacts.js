import React from 'react';
import RelationCard from './components/RelationCard';
import ExpandBar from '../../../../ExpandBar';
import AddContactRef from './components/AddContactRef';
import { RemoveCompanyRef } from '../../../../Api/Contact';
import { MultiRefChange } from '../../../../Api/Company';
import './AssociatedContacts.scss';

class AssociatedContacts extends React.Component {
  constructor(props) {
    super(props);
    const { company, contactList } = this.props;
    this.state = {
      contactList,
      company,
      selectedContacts: [],
    };
    this.handleRemoveRef = this.handleRemoveRef.bind(this);
    this.handleSelectedContacts = this.handleSelectedContacts.bind(this);
    this.onClickSaveBtn = this.onClickSaveBtn.bind(this);
  }

  handleSelectedContacts(contacts) {
    const newContacts = [];
    for (const i in contacts) {
      newContacts.push(contacts[i].id);
    }

    this.setState({
      selectedContacts: newContacts,
    });
  }

  handleRemoveRef(contactId, companyId) {
    const data = RemoveCompanyRef(contactId, companyId);
    data.then((response) => {
      if (response.statusText === 'OK') {
        const newContacts = this.state.contactList;
        for (const i in newContacts) {
          if (newContacts[i].id === contactId) {
            newContacts.splice(i, 1);
            console.log(newContacts);
          }
        }
        this.setState({
          contactList: newContacts,
        });
        console.log('Remove company success');
      } else {
        console.log('Remove company failed');
      }
    });
  }

  onClickSaveBtn() {
    const body = { contacts: this.state.selectedContacts };
    const data = MultiRefChange(this.state.company.id, body);
    data.then((response) => {
      if (response.statusText === 'OK') {
        this.setState({
          contactList: response.data.associatedContacts,
        });
        console.log('Add Contacts success');
      } else {
        console.log('Add Contacts failed');
      }
    });
  }

  render() {
    const { contactList, company } = this.state;
    let showDetail = false;

    if (contactList.length > 0) {
      showDetail = true;
    }

    const addModal = {
      title: 'Add companies to this contact',
      content: <AddContactRef
        contactList={contactList}
        handleSelectedContacts={this.handleSelectedContacts}
      />,
    };

    return (
      <div className="associatedContacts">
        <ExpandBar
          label={`Contacts (${contactList.length})`}
          showDetail={showDetail}
          showAdd
          addModal={addModal}
          onClickSaveBtn={this.onClickSaveBtn}
          content={(
            <RelationCard
              contacts={contactList}
              company={company}
              handleRemoveRef={this.handleRemoveRef}
            />
          )}
        />
      </div>
    );
  }
}

export default AssociatedContacts;

import React from 'react';
import RelationCard from './components/RelationCard';
import AddComapnyRef from './components/AddCompanyRef';
import ExpandBar from '../../../../ExpandBar';
import { AddCompanyRef, RemoveCompanyRef } from '../../../../Api/Contact';
import './AssociatedCompany.scss';

class AssociatedCompany extends React.Component {
  constructor(props) {
    super(props);
    const hintMessage = 'You may only associate one company to a contact record';
    this.state = {
      hintMessage,
      company: this.props.company,
      contact: this.props.contact,
      selectedCompany: '',
    };
    this.handleSelectedCompany = this.handleSelectedCompany.bind(this);
    this.handleRemoveCompany = this.handleRemoveCompany.bind(this);
    this.onClickSaveBtn = this.onClickSaveBtn.bind(this);
  }

  handleSelectedCompany(company) {
    this.setState({
      selectedCompany: company,
    });
  }

  handleRemoveCompany() {
    const data = RemoveCompanyRef(this.state.contact.id, this.state.company.id);
    data.then((response) => {
      if (response.statusText === 'OK') {
        this.setState({
          company: '',
        });
        console.log('Remove company success');
      } else {
        console.log('Remove company failed');
      }
    });
  }

  onClickSaveBtn() {
    const data = AddCompanyRef(this.state.contact.id, this.state.selectedCompany.id);
    data.then((response) => {
      if (response.statusText === 'OK') {
        this.setState((prevState) => ({
          company: prevState.selectedCompany,
        }));
        console.log('Add company success');
      } else {
        console.log('Add company failed');
      }
    });
  }

  render() {
    const { hintMessage, company, contact } = this.state;

    let showDetail = false;
    if (company) {
      showDetail = true;
    }

    const addModal = {
      title: 'Add companies to this contact',
      content: <AddComapnyRef handleSelectedCompany={this.handleSelectedCompany} />,
    };

    let disabled = false;
    if (company) {
      disabled = true;
    }

    return (
      <div className="contactsCompany">

        <ExpandBar
          content={(
            <RelationCard
              company={company}
              contact={contact}
              handleRemoveCompany={this.handleRemoveCompany}
            />
      )}
          label="Company"
          addModal={addModal}
          hintMessage={hintMessage}
          disabled={disabled}
          showDetail={showDetail}
          showAdd
          onClickSaveBtn={this.onClickSaveBtn}
        />
      </div>
    );
  }
}

export default AssociatedCompany;

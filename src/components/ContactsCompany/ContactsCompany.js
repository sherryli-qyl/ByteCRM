import React from 'react';
import RelationCard from './components/RelationCard';
import AddComapnyRef from './components/AddCompanyRef';
import ExpandBar from '../ExpandBar';
import './ContactsCompany.scss';


class ContactsCompany extends React.Component {
  constructor(props) {
    super(props);
    const hintMessage = "You may only associate one company to a contact record";
    this.state = {
      hintMessage,
      company: this.props.company,
      selectedCompany: "",
    }
    this.handleSelectedCompany = this.handleSelectedCompany.bind(this);
    this.handleRemoveCompany = this.handleRemoveCompany.bind(this);
    this.onClickSaveBtn = this.onClickSaveBtn.bind(this);
  }

  handleSelectedCompany(company) {
    this.setState({
      selectedCompany: company
    })
  }

  handleRemoveCompany(){
    this.setState({
      company:""
    })
  }

  onClickSaveBtn() {
    this.setState(prevState => ({
      company: prevState.selectedCompany
    })
    )
  }




  render() {
    const { hintMessage, company } = this.state;
    const addModal = {
      title: 'Add companies to this contact',
      content: <AddComapnyRef handleSelectedCompany={this.handleSelectedCompany} />
    }

    let disabled = false;
    if (company) {
      disabled = true
    }

    return (
      <div className="contactsCompany">
        <ExpandBar content={<RelationCard company={company} 
                                          handleRemoveCompany = {this.handleRemoveCompany}/>}
                   label={"Company"}
                   addModal={addModal}
                   hintMessage={hintMessage}
                   disabled={disabled}
                   showAdd={true}
                   onClickSaveBtn = {this.onClickSaveBtn} />
      </div>
    )
  }
}








export default ContactsCompany;
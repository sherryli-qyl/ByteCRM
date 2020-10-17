import React, { Component } from "react";
import "./ContactList.scss";
import ListPage from "./components/PageWrapper";


const tabs = [
  {
    id: 1,
    label: "All contacts",
  },
  {
    id: 2,
    label: "My contacts",
  },
  {
    id: 3,
    label: "Unassigned contacts"
  }
];


class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: "Yurun Yu",
    };
  }

  render() {
    return (
      <div className="root" key={'wrapper'}>
        <h1>Contacts</h1>
        <ListPage tabs={tabs} userAccount={this.state.userAccount} />
      </div>
    );
  }
}

export default ContactList;

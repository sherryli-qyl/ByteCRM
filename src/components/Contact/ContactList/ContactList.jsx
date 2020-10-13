import React, { Component } from "react";
import "./ContactList.scss";
import SwitchBar from "./components/SwitchBar/SwitchBar";



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
    label: "Unassigned contacts",
  },
];


class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: "James",
    };
  }

  render() {
    return (
      <div className="root" key={'wrapper'}>
        <h1>Contacts</h1>
        <SwitchBar tabs={tabs} userAccount={this.state.userAccount} />
      </div>
    );
  }
}

export default ContactList;

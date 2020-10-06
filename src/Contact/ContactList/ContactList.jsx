import React, { Component } from "react";
import "./ContactList.scss";
import SwitchBar from "./components/SwitchBar/SwitchBar";
import All from "@material-ui/icons/Face";
import Mine from "@material-ui/icons/CheckCircle";
import Unassigned from "@material-ui/icons/CheckCircleOutline";


const tabs = [
  {
    id: 1,
    label: "All contacts",
    component: <h1>All contacts</h1>,
    icon: <All />,
  },
  {
    id: 2,
    label: "My contacts",
    component: <h1>My contacts</h1>,
    icon: <Mine />,
  },
  {
    id: 3,
    label: "Unassigned contacts",
    component: <h1>Unassigned contacts</h1>,
    icon: <Unassigned />,
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
        <SwitchBar tabs={tabs} userAccount={this.state.userAccount} />
      </div>
    );
  }
}

export default ContactList;

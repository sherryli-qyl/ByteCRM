import React, { Component } from 'react';
import './ContactList.scss';
import NavBar from '../../Navbar';
import SwitchBar from './components/SwitchBar/SwitchBarAndTable';
import All from '@material-ui/icons/Face';
import Mine from '@material-ui/icons/CheckCircle';
import Unassigned from '@material-ui/icons/CheckCircleOutline';
import EnhancedTable from './components/Table/EnhancedTable';


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

let userAccount = "James";

// TODO4: 完成后端数据库
// TODO6: 将添加、删除用axios实现
  

class ContactList extends Component {
  // constructor(props) {
  //   super (props);
  // }

  render() {
    return (
      <div className="root">
        <NavBar />
        <SwitchBar tabs={tabs} userAccount={userAccount}v/>
        {/* TODO: <EnhancedTable /> */}
      </div>
    )
  }
}

export default ContactList;

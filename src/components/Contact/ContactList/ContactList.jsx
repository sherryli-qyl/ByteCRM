import React, { Component } from 'react';
import './ContactList.scss';
import NavBar from '../../Navbar';
import SwitchBar from './components/SwitchBar/SwitchBarAndTable';
import All from '@material-ui/icons/Face';
import Mine from '@material-ui/icons/CheckCircle';
import Unassigned from '@material-ui/icons/CheckCircleOutline';


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

// TODO1: 需要一个弹窗输入信息
// TODO4: 完成后端数据库
// TODO5: 需要实现联系人等属性的跳转
// TODO6: 将添加、删除用数据库实现
  

class ContactList extends Component {
  // constructor(props) {
  //   super (props);
  // }

  render() {
    return (
      <div className="root">
        <NavBar />
        <SwitchBar tabs={tabs} userAccount={userAccount}v/>
      </div>
    )
  }
}

export default ContactList;

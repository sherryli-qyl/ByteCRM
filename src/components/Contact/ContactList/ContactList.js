import React from 'react';
import './ContactList.scss';
import NavBar from '../../Navbar';
import { NavLink } from 'react-router-dom';
import EnhancedTable from './components/Table';

const ContactList = () => (
  // TODO1: 需要一个弹窗输入信息
  // TODO2: 需要一个Navbar切换表格
  // TODO4: 完成后端数据库
  // TODO5: 需要实现联系人等属性的跳转
  // TODO6: 将添加、删除用数据库实现
  <div>
    <header>
      <NavBar />
    </header>
    <div className="Contacts">
      <h2>Contacts</h2>
      <ul className="contacts-list">
        <li className="navbar-contacts">
          <NavLink activeClassName="active" to="/contacts/main">
            <button>Brian Halligan</button>
          </NavLink>
        </li>
      </ul>
    </div>
    <EnhancedTable />
  </div>
);

export default ContactList;

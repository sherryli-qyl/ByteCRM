import React from 'react';
import './ContactList.scss';
import NavBar from '../../Navbar';
import { NavLink } from 'react-router-dom';
import EnhancedTable from './components/table';

const ContactList = () => (
  // TODO4: 实现csv文件的数据导入
  // TODO5: 完成后端数据库
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

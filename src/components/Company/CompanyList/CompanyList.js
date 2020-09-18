import React from 'react';
import NavBar from '../../Navbar';
import './CompanyList.scss';
import {NavLink} from 'react-router-dom';


const CompanyList = () => (
    <div>
        <header>
            <NavBar />
        </header>
        <div className="Company">
            <h2>Company</h2>
            <ul className="Company-list">
                <li className="navbar-company">
                    <NavLink activeClassName="active" to="/companies/main">
                        <button>Hubspot</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
);

export default CompanyList;

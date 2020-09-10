import React from 'react';
import NavBar from '../../Navbar';
import './CompanyList.scss';


const CompanyList = () => (
    <div>
        <header>
            <NavBar />
        </header>
        <div className="Company">
            <h2>Company</h2>
            <ul className="Company-list">
                <li><button>Hubspot</button></li>
            </ul>
        </div>
    </div>
);

export default CompanyList;
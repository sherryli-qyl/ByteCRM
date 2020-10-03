import React from 'react';
import './CompanyList.scss';
import { NavLink } from 'react-router-dom';
import NavBar from "./components/NavBar";
import MaterialTableDemo from "./components/MaterialTableDemo";
import CompanyIcon from "@material-ui/icons/Business";
import AddIcon from "@material-ui/icons/Add";
import CompanyLink from "./components/CompanyLink";



const CompanyList = () => (
    <div>
        <div className="Companylist">
            <NavBar tabs={tabs} />
            <NavLink activeClassName="active" to="/companies/main">
            <CompanyLink />
            </NavLink>
            <MaterialTableDemo />
        </div>
    </div>
);

const tabs = [
    {
        id: 1,
        label: "All Companies",
        component: <h1>All Companies</h1>,
        icon: <CompanyIcon />,
    },
    {
        id: 2,
        label: "My Companies",
        component: <h1>My Companies</h1>,
        icon: <CompanyIcon />,
    },
    {
        id: 3,
        label: "Add View",
        component: <h1>Add View</h1>,
        icon: <AddIcon />,
    },
];

export default CompanyList;

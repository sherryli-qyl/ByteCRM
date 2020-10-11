import React from 'react';
import './CompanyList.scss';
import NavBar from "./components/NavBar/NavBar";
import MaterialTableDemo from "./components/MaterialTableDemo";


const CompanyList = () => (
    <div>
        <div className="Companylist">
            <NavBar tabs={tabs} />
            <MaterialTableDemo />
        </div>
    </div>
);

const tabs = [
    {   
        label: "All Companies",
        id: 1,
        
    },
    {
        label: "My Companies",
        id: 2,
        
    },
    {        
        label: "Add View",
        id: 3,
    },
];

export default CompanyList;

import React, { Component } from 'react';
import './CompanyList.scss';
import PageWrapper from '../../../pages/ListPageWrapper';

const tabs = [
  {
    id: 1,
    label: 'All companies',
  },
  {
    id: 2,
    label: 'My companies',
  },
  {
    id: 3,
    label: 'Unassigned companies',
  },
];

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: 'Zoe Joey',
    };
  }

  render() {
    return (
      <div className="root" key="wrapper">
        <h1>Companies</h1>
        <PageWrapper tabs={tabs} userAccount={this.state.userAccount} type="company" />
      </div>
    );
  }
}

export default CompanyList;

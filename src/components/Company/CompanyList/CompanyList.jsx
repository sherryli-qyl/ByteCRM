import React, { Component } from "react";
import "./CompanyList.scss";
import ListPage from "./components/listPage";



const tabs = [
  {
    id: 1,
    label: "All Companies",
  },
  {
    id: 2,
    label: "My Companies",
  },
];


class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: "James",
    };
  }

  render() {
    return (
      <div className="root" key={'wrapper'}>
        <h1>Companies</h1>
        <ListPage tabs={tabs} userAccount={this.state.userAccount} />
      </div>
    );
  }
}

export default CompanyList;

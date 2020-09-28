import React, { Component } from "react";
import "./ContactList.scss";
import NavBar from "../../Navbar";
import SwitchBar from "./components/SwitchBar/SwitchBar";
import All from "@material-ui/icons/Face";
import Mine from "@material-ui/icons/CheckCircle";
import Unassigned from "@material-ui/icons/CheckCircleOutline";
import EnhancedTable from "./components/Table/EnhancedTable";
import Importer from "./components/Importer";
import { getTable, addRowsToTable, editTable } from "./tableServices/getData";

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

// TODO4: 完成后端数据库
// TODO6: 将添加、删除用axios实现

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      userAccount: "James",
    };
  }

  getActiveTab = (tab) => {
    this.setState({ tab: tab });
  };

  getNewDataFromCSV = (newRows) => {
    return newRows;
  };

  // remove和add直接得到新的table
  updateTable = (newTable) => {
    return newTable;
  };

  // edit只能得到需要修改的行和域
  getDataToEdit = (dataToEdit) => {
    return dataToEdit;
  };

  // setTable = (data) => {
  //   this.setState({ table: data });
  // };

  render() {
    return (
      <div className="root">
        <NavBar />
        <SwitchBar tabs={tabs} getActiveTab={this.getActiveTab} />
        <Importer getNewData={this.getNewDataFromCSV} />
        <EnhancedTable
          updateTable={this.updateTable}
          getDataToEdit={this.getDataToEdit}
          data={getTable(
            this.state.tab,
            this.state.userAccount,
            this.getNewDataFromCSV,
            this.updateTable,
            this.getDataToEdit
          )}
        />
      </div>
    );
  }
}

export default ContactList;

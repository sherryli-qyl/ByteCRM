import React from "react";
import EnhancedTable from "./components/EnhancedTable";
import Importer from "../Importer";
import { getAllContacts } from '../../../../Api/Contact';
import {
  getTable,
  addRowsFromCsv,
  editColumns,
  updateTable
} from "../../tableLibs/getData";

class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: []
    };
  }

  getNewDataFromCSV = (newRows) => {
    this.setState({
      table: addRowsFromCsv(newRows),
    });
  };

  getNewTable = (newTable) => {
    this.setState({
      table: updateTable(newTable)
    });
  }

  // edit只能得到需要修改的行和域
  getDataToEdit = (dataToEdit) => {
    this.setState({
      table: editColumns(dataToEdit),
    });
    setTimeout(() => {
        console.log(this.state.table);
    })
  };

  render() {
    return (
      <>
        <Importer getNewData={this.getNewDataFromCSV} />
        <EnhancedTable
          getNewTable={this.getNewTable}
          getDataToEdit={this.getDataToEdit}
          tab={this.props.tab}
          userAccount={this.props.userAccount}
        />
      </>
    );
  }
}

export default TableWrapper;

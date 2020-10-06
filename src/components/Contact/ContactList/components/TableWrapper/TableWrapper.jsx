import React from "react";
import EnhancedTable from "./components/EnhancedTable";
import Importer from "../Importer";
import {
  getTable,
  addRowsToTable,
  editTable,
} from "../../tableServices/getData";

class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: getTable(props.tab, props.userAccount),
    };
  }

  getNewDataFromCSV = (newRows) => {
    this.setState({
      table: addRowsToTable(newRows),
    });
  };

  // remove和add直接得到新的table
  //   updateTable = (newTable) => {
  //     this.setState({ table: newTable });
  //   };

  // edit只能得到需要修改的行和域
  getDataToEdit = (dataToEdit) => {
    this.setState({
      table: editTable(dataToEdit),
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
          updateTable={this.updateTable}
          getDataToEdit={this.getDataToEdit}
          data={this.state.table}
        />
      </>
    );
  }
}

export default TableWrapper;

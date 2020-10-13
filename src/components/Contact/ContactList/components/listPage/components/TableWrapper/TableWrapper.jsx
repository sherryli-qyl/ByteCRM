import React from "react";
import EnhancedTable from "./components/EnhancedTable/EnhancedTable";
import Importer from "./components/Importer";
import { addRowsFromCsv } from "../../../../tableLibs/getData";

class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CSVData: [],
    };
  }

  getNewDataFromCSV = (newRows) => {
    this.setState({
      CSVData: addRowsFromCsv(newRows),
    });
  };

  // getNewTable = (newTable) => {
  //   this.setState({
  //     table: updateTable(newTable)
  //   });
  // }

  // edit只能得到需要修改的行和域
  // getDataToEdit = (dataToEdit) => {
  //   this.setState({
  //     table: editColumns(dataToEdit),
  //   });
  //   setTimeout(() => {
  //       console.log(this.state.table);
  //   })
  // };

  render() {
    return (
      <>
        <Importer getNewData={this.getNewDataFromCSV} />
        <EnhancedTable
          CSVData={this.state.CSVData}
          tab={this.props.tab}
          userAccount={this.props.userAccount}
        />
      </>
    );
  }
}

export default TableWrapper;

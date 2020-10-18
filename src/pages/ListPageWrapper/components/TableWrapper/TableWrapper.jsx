import React from "react";
import EnhancedTable from "./components/EnhancedTable/EnhancedTable";
import Reader from "./components/Importer";


class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CSVData: [],
    };
  }

  getNewDataFromCSV = (newRows) => {
    this.setState({
      CSVData: newRows,
    });
    setTimeout(()=> {
      console.log(this.state.CSVData);
    }, 500)
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
        <Reader 
          getNewData={this.getNewDataFromCSV} 
        />
        <EnhancedTable
          CSVData={this.state.CSVData}
          tab={this.props.tab}
          userAccount={this.props.userAccount}
          type={this.props.type}
        />
      </>
    );
  }
}

export default TableWrapper;

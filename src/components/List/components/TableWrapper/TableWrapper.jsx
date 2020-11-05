import React from "react";
import EnhancedTable from "./components/EnhancedTable/EnhancedTable";

class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CSVData: [],
    };
  }

  getNewData = (text) => {
    this.setState({
      CSVData: text,
    });
  };

  render() {
    return (
      <EnhancedTable
        CSVData={this.state.CSVData}
        tab={this.props.tab}
        userAccount={this.props.userAccount}
        type={this.props.type}
      />
    );
  }
}

export default TableWrapper;

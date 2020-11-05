import React from 'react';
import EnhancedTable from './components/EnhancedTable/EnhancedTable';
import Importer from './components/Importer';

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
    setTimeout(() => {
      console.log(this.state.CSVData);
    }, 500);
  };

  render() {
    return (
      <>
        <Importer
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

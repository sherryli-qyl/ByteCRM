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

  getNewData = (text) => {
    this.setState({
      CSVData: text,
    });
  };

  render() {
    return (
      <>
        <Importer
          getNewData={this.getNewData}
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

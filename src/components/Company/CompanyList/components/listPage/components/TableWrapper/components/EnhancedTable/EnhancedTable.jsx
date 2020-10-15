import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Theme from '../../../../../../../../Style/Theme/TableTheme';
import MaterialTable from 'material-table';
import SelectModal from './components/SelectModal';
import tableIcons from '../../../../../../tableLibs/getIcons';
import getColumns from '../../../../../../tableLibs/getColumns';
import remove from '../../../../../../tableLibs/removeRow';
import exportCSV from '../../../../../../tableLibs/exportCSV';
import exportPDF from '../../../../../../tableLibs/exportPDF';
import updateRow from '../../../../../../tableLibs/updateRow';
import { GetAllCompanies } from '../../../../../../../../Api/Company/Company';
import {
  getTable,
  processData,
  editColumns,
  updateTable
} from '../../../../../../tableLibs/getData';


class EnhancedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      columns: getColumns(),
      selectedRow: null,
      dataToShow: [],
      allData: []
    };
  }

  componentDidMount() {
    GetAllCompanies({getAll: true}).then((data) => {
    console.log("EnhancedTable -> componentDidMount -> data", data)
      let allData = [];
      allData = data.map((cur) => processData(cur));
      const temp = getTable(allData, this.props.tab, this.props.userAccount);
      this.setState({
        allData: allData,
        dataToShow: temp,
      });
    });
  }

  removeRow = (evt, selectedRow) => {
    evt.preventDefault();
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let allData = [...this.state.data], deleteData = [];
        [allData, deleteData] = remove(allData, selectedRow);
        // removeDataInDB()
        this.setState({
          dataToShow: allData
        })
        resolve();
      }, 500);
    });
  };

  addRow = (newData) =>
    new Promise((resolve, reject) => {
      newData = updateRow(newData);
      setTimeout(() => {
        // this.props.getNewTable([...this.state.data, newData]);
      }, 0);
    });

  showModal = (evt, selectedRow) => {
    evt.preventDefault();
    this.setState({ modalVisible: true });
  };

  changeVisible = (s) => {
    this.setState({ modalVisible: s });
  };

  getDataAndIndex = (data) => {
    // Add the index of rows for editing
    if (data.size !== 0) {
      data.set('index', this.state.selectedRow);
    }
    // this.props.getDataToEdit(data);
  };

  getSelectedRowIndex = (Rows) => {
    let index = [];
    for (const item of Rows) {
      index.push(item.tableData.id);
    }
    return index;
  };

  render() {
    return (
      <>
        {this.state.modalVisible && (
          <SelectModal
            changeModalVisible={this.changeVisible}
            getDataToEdit={this.getDataAndIndex}
          ></SelectModal>
        )}
        {/* <Manipulators /> */}
        <MuiThemeProvider theme={Theme}>
          <MaterialTable
            title={null}
            columns={this.state.columns}
            data={this.state.dataToShow}
            icons={tableIcons}
            onRowClick={(evt, selectedRow) => {}}
            onSelectionChange={(Rows) =>
              this.setState({ selectedRow: this.getSelectedRowIndex(Rows) })
            }
            actions={[
              {
                tooltip: 'Remove all selected company(s)',
                icon: tableIcons.Delete,
                onClick: this.removeRow,
              },
              {
                tooltip: 'Edit company(s)',
                icon: tableIcons.Edit,
                onClick: this.showModal,
              },
            ]}
            options={{
              selection: true,
              search: true,
              sorting: true,
              pageSize: 10,
              pageSizeOptions: [10, 30, 50],
              exportButton: true,
              exportCsv: exportCSV,
              exportPdf: exportPDF,
            }}
            editable={{
              onRowAdd: this.addRow,
            }}
          />
        </MuiThemeProvider>
      </>
    );
  }
}

export default EnhancedTable;

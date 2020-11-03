import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Theme from '../../../../../Style/Theme/TableTheme';
import SelectModal from './components/SelectModal';
import tableIcons from '../../../../../../lib/tableLibs/getIcons';
import getColumns from '../../../../../../lib/tableLibs/getColumns';
import exportCSV from '../../../../../../lib/tableLibs/exportCSV';
// import exportPDF from "../../../../../../lib/tableLibs/exportPDF";
import {
  GetAllContacts,
  removeContact,
  createContact,
  UpdateContact,
} from '../../../../../Api/Contact';
import {
  GetAllCompanies,
  AddCompany,
  UpdateCompany,
  DeleteCompany,
} from '../../../../../Api/Company';
import {
  getTable,
  processData,
  makeNewRow,
  remove,
} from '../../../../../../lib/tableLibs/dataOperation';

class EnhancedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      columns: getColumns(this.props.type),
      selectedRow: null,
      dataToShow: [],
      allData: [],
    };
  }

  componentDidMount() {
    if (this.props.type === 'contact') {
      this.getAllContacts();
    } else {
      this.getAllCompanies();
    }
  }

  // TODO: get new data from CSV
  componentDidUpdate(nextProps) {
    const { CSVData } = this.props;
    if (nextProps.CSVData !== CSVData) {
      if (this.props.type === 'contact') {
        console.log(nextProps.CSVData);
        // for loop + validate
        // createContact(nextProps.CSVData);
      } else if (this.props.type === 'company') {
        // AddCompany(nextProps.CSVData);
        setTimeout(() => {
          console.log(nextProps.CSVData);
        }, 500);
      }
      // setTimeout(() => {
      //   if (this.props.type === "contact") {
      //     this.getAllContacts();
      //   } else {
      //     this.getAllCompanies();
      //   }
      // }, 1000);
    }
  }

  getAllContacts = () => {
    GetAllContacts().then((data) => {
      console.log('EnhancedTable -> componentDidMount -> data', data);
      let allData = [];
      allData = data.map((cur) => processData(cur, this.props.type));
      const showData = getTable(
        allData,
        this.props.tab,
        this.props.userAccount,
        this.props.type,
      );
      this.setState({
        allData,
        dataToShow: showData,
      });
    });
  };

  getAllCompanies = () => {
    GetAllCompanies().then((data) => {
      console.log('EnhancedTable -> componentDidMount -> data', data);
      let allData = [];
      allData = data.map((cur) => processData(cur, this.props.type));
      const showData = getTable(
        allData,
        this.props.tab,
        this.props.userAccount,
        this.props.type,
      );
      this.setState({
        allData,
        dataToShow: showData,
      });
    });
  };

  removeRow = (evt, selectedRow) => {
    evt.preventDefault();
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let allData = [...this.state.dataToShow];
          const deleteRow = [];
        // remove rows of dataToShow for table display
        allData = remove(allData, selectedRow);
        for (const row of selectedRow) {
          deleteRow.push(this.state.dataToShow[row.tableData.id]);
        }
        // remove data in mongoDB
        deleteRow.map((cur) => {
          if (this.props.type === 'contact') {
            removeContact(cur.contactID).then((code) => {
              console.log('EnhancedTable -> removeRow -> code', code);
            });
          } else if (this.props.type === 'company') {
            DeleteCompany(cur.companyID).then((status) => {
              console.log(`Delete completion is ${status}`);
            });
          }
        });
        this.setState({
          dataToShow: allData,
        });
        resolve();
      }, 500);
    });
  };

  addRow = (newData) => new Promise((resolve, reject) => {
      setTimeout(() => {
        newData = makeNewRow(newData, this.props.type);
        if (this.props.type === 'contact') {
          createContact(newData);
        } else if (this.props.type === 'company') {
          AddCompany(newData);
        }
        setTimeout(() => {
          if (this.props.type === 'contact') {
            this.getAllContacts();
          } else {
            this.getAllCompanies();
          }
        }, 1000);
        resolve();
      }, 500);
    });

  showModal = (evt, selectedRow) => {
    evt.preventDefault();
    this.setState({ modalVisible: true });
  };

  changeVisible = (s) => {
    this.setState({ modalVisible: s });
  };

  getDataToEdit = (data) => {
    this.state.selectedRow.map((cur) => {
      if (this.props.type === 'contact') {
        UpdateContact(this.state.allData[cur].contactID, data);
      } else if (this.props.type === 'company') {
        UpdateCompany(this.state.allData[cur].companyID, data);
      }
    });
    setTimeout(() => {
      if (this.props.type === 'contact') {
        this.getAllContacts();
      } else {
        this.getAllCompanies();
      }
    }, 1000);
  };

  getSelectedRowIndex = (Rows) => {
    const index = [];
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
            getDataToEdit={this.getDataToEdit}
            type={this.props.type}
          />
        )}
        <MuiThemeProvider theme={Theme}>
          <MaterialTable
            title={null}
            columns={this.state.columns}
            data={this.state.dataToShow}
            icons={tableIcons}
            onRowClick={(evt, selectedRow) => {}}
            onSelectionChange={(Rows) => {
              this.setState({ selectedRow: this.getSelectedRowIndex(Rows) });
            }}
            actions={[
              {
                tooltip: 'Remove all selected contact(s)',
                icon: tableIcons.Delete,
                onClick: this.removeRow,
              },
              {
                tooltip: 'Edit contact(s)',
                icon: tableIcons.Edit,
                onClick: this.showModal,
              },
            ]}
            options={{
              selection: true,
              addRowPosition: 'first',
              search: true,
              sorting: true,
              pageSize: 10,
              pageSizeOptions: [10, 30, 50],
              exportButton: true,
              // exportPdf: (columns, data) =>
              //   exportPDF(columns, data, this.props.type),
              exportCsv: (columns, data) => exportCSV(columns, data, this.props.type),
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

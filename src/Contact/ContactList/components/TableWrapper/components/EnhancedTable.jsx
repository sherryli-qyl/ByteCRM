import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import SelectModal from "../../SelectModal";
import tableIcons from "../../../tableLibs/getIcons";
import getColumns from "../../../tableLibs/getColumns";
import remove from "../../../tableLibs/removeRow";
import exportCSV from "../../../tableLibs/exportCSV";
import exportPDF from "../../../tableLibs/exportPDF";
import updateRow from "../../../tableLibs/updateRow";


const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#81C7D4",
    },
    secondary: {
      main: "#33A6B8",
    },
  },
});

class EnhancedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      columns: getColumns(),
      selectedRow: null,
      data: props.data,
    };
  }

  removeRow = (evt, selectedRow) => {
    evt.preventDefault();
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let dataDelete = [...this.state.data];
        dataDelete = remove(dataDelete, selectedRow);
        this.props.getNewTable([...dataDelete]);
        resolve();
      }, 500);
    });
  };

  addRow = (newData) =>
    new Promise((resolve, reject) => {
      newData = updateRow(newData);
      setTimeout(() => {
        this.props.getNewTable([...this.state.data, newData]);
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
      data.set("index", this.state.selectedRow);
    }
    this.props.getDataToEdit(data);
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
        <MuiThemeProvider theme={Theme}>
          <MaterialTable
            title={null}
            columns={this.state.columns}
            data={this.state.data}
            icons={tableIcons}
            onRowClick={(evt, selectedRow) => {}}
            onSelectionChange={(Rows) =>
              this.setState({ selectedRow: this.getSelectedRowIndex(Rows) })
            }
            actions={[
              {
                tooltip: "Remove all selected contact(s)",
                icon: tableIcons.Delete,
                onClick: this.removeRow,
              },
              {
                tooltip: "Edit contact(s)",
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

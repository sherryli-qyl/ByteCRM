import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Editor from "../Editor";
import tableIcons from "../../services/getIcons";
import getColumns from "../../services/getColumns";
import remove from "../../services/removeSelected";
import exportCSV from "../../services/exportCSV";
import exportPDF from "../../services/exportPDF";
import updateRow from "../../services/updateRow";

// 表格部分样式
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

class EnhancedTable extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      columns: getColumns(),
      data: props.data,
      title: "Please select a field to edit"
      // selectedRow: null
    };
  }

  setData = (newData) => {
    this.setState({ data: newData });
  }

  showEditor = () => {
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     this.setState({ visible: true });
    //     console.log(this.state);
    //   }, 500);
    // });
    // this.forceUpdate();
    this.setState({ visible: true });
    console.log(this.state);
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible) {
      console.log(prevState.visible, this.state.visible);
      console.log('Visible state has changed.');
      // prevState.visible = !prevState.visible;
    }
  }

  removeRow = (evt, selectedRow) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let dataDelete = [...this.state.data];
        dataDelete = remove(dataDelete, selectedRow);
        this.setData([...dataDelete]);
        resolve();
      }, 500);
    });
  }

  render() {
    return (
      <>
        <MuiThemeProvider theme={Theme}>
          <MaterialTable
            title={null}
            columns={this.state.columns}
            data={this.state.data}
            icons={tableIcons}
            onRowClick={(evt, selectedRow) => {}}
            // onSelectionChange={(Rows) => console.log(Rows)}
            actions={[
              {
                tooltip: "Remove all selected contact(s)",
                icon: tableIcons.Delete,
                onClick: this.removeRow,
              },
              {
                tooltip: "Edit contact(s)",
                icon: tableIcons.Edit,
                onClick: this.showEditor,
              },
            ]}
            options={{
              selection: true,
              filtering: false,
              search: true,
              sorting: true,
              pageSize: 10,
              pageSizeOptions: [10, 30, 50],
              exportButton: true,
              exportCsv: exportCSV,
              exportPdf: exportPDF,
            }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  newData = updateRow(newData, true);
                  setTimeout(() => {
                    this.setData([...this.state.data, newData]);
                    resolve();
                  }, 500);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  newData = updateRow(newData);
                  setTimeout(() => {
                    const dataUpdate = [...this.state.data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    this.setData([...dataUpdate]);
                    resolve();
                  }, 500);
                }),
            }}
          />
        </MuiThemeProvider>
        <Editor visible={this.state.visible} title={this.state.title} ></Editor>
      </>
    );
  }
}

export default EnhancedTable;

import React, { Component, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Editor from '../Editor';
import tableIcons from '../../services/getIcons';
import getColumns from '../../services/getColumns';
import remove from '../../services/removeSelected';
import exportCSV from '../../services/exportCSV';
import exportPDF from '../../services/exportPDF';
import updateRow from '../../services/updateRow';


// 表格部分样式
const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#81C7D4',
    },
    secondary: {
      main: '#33A6B8',
    },
  },

});

function EnhancedTable(props) {
    const [columns, setColumns] = useState(getColumns());
    const [data, setData] = useState(props.data);
    const [selectedRow, setSelectedRow] = useState(null);
    const [visible] = useState(false);

    return (
      <>
        <Editor visible={visible}></Editor>
        <MuiThemeProvider theme={Theme}>
          <MaterialTable
            title={null}
            columns={columns}
            data={data}
            icons={tableIcons}
            onRowClick={(evt, selectedRow) => {}}
            // onSelectionChange={(Rows) => console.log(Rows)}
            actions={[
              { tooltip: 'Remove All Selected Contacts',
                icon: tableIcons.Delete,
                onClick: (evt, selectedRow) => 
                  new Promise((resolve, reject) => {
                      setTimeout(() => {
                        let dataDelete = [...data];
                        dataDelete = remove(dataDelete, selectedRow);
                        setData([...dataDelete]);
                        resolve();
                      }, 500);
                  })
              }, {
                tooltip: 'Edit contact',
                icon: tableIcons.Edit,
                onClick: (event, rowData) => {
                  console.log(rowData)

                }
            }]}
            options={{
              selection: true,
              filtering: false,
              search: true,
              sorting: true,
              pageSize: 10,
              pageSizeOptions: [10, 30, 50],
              exportButton: true,
                exportCsv: (columns, data) => {
                  exportCSV(columns, data);
                },
                exportPdf: (columns, data) => {
                  exportPDF(columns, data);
                },
            }}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  newData = updateRow(newData, true);
                  setTimeout(() => {
                    setData([...data, newData]);
                    resolve();
                  }, 500);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  newData = updateRow(newData);
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                    resolve();
                  }, 500)
                }),
            }}
          />
        </MuiThemeProvider>
      </>
    )
}


export default EnhancedTable;
import React, { Component, useState, forwardRef } from 'react';
import MaterialTable from 'material-table'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function getColumns() {
  return ([
    { title: 'Name', field: 'name', type: 'string' },
    { title: 'Email', field: 'email', type: 'string', filtering: false },
    { title: 'Phone', field: 'phoneNumber', type: 'string', filtering: false },
    { title: 'ContactOwner', field: 'contactOwner', type: 'string' },
    { title: 'AssociatedCompany', field: 'associatedCompany', type: 'string' },
    { title: 'LastActivityDate', field: 'lastActivityDate', type: 'string' },
    { title: 'LeadStatus', field: 'leadStatus', type: 'string', 
      lookup: { 1: 'New', 2: 'Open', 3: 'In progress', 4: 'Open deal', 5: 'Unqualified', 6: 'Attempted to contact', 7: 'Connected', 8: 'Bad timing' },
    },
    { title: 'CreateDate', field: 'createDate', type: 'string' },
  ])
};

// 生成假数据的暂时方法
function createData(
  name,
  email,
  phoneNumber,
  contactOwner,
  associatedCompany,
  lastActivityDate,
  leadStatus,
  createDate
) {
  return ({
      name: name, 
      email: email, 
      phoneNumber: phoneNumber, 
      contactOwner: contactOwner,
      associatedCompany: associatedCompany,
      lastActivityDate: lastActivityDate,
      leadStatus: leadStatus,
      createDate: createDate, 
    }
  );
}

const rows = [
  createData(
    'John',
    'fqwfqwd@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    1,
    '08/09/2020'
  ),
  createData(
    'Louis',
    'affq@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    2,
    '08/09/2020'
  ),
  createData(
    'Eclair',
    '343ewf@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    3,
    '08/09/2020'
  ),
  createData(
    'Mary',
    '413fqw@gmail.com',
    '045499149',
    'Louis',
    ' HubSpot, Inc.',
    '10/09/2020',
    4,
    '08/09/2020'
  ),
  createData(
    'Brian',
    'edgar61@hotmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    5,
    '08/09/2020'
  ),
  createData(
    'Keith',
    'elias82@yahoo.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    6,
    '08/09/2020'
  ),
  createData(
    'Larry',
    'webb80@mail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    7,
    '08/09/2020'
  ),
  createData(
    'Jason',
    'billy73@mail.com.au',
    '045499149',
    'Louis',
    ' HubSpot, Inc.',
    '10/09/2020',
    8,
    '08/09/2020'
  ),
  createData(
    'Joseph',
    'parlin.joseph@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    5,
    '08/09/2020'
  ),
  createData(
    'Samuel',
    'tebo84@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    3,
    '08/09/2020'
  ),
  createData(
    'Lori',
    'davis1@hotmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    2,
    '08/09/2020'
  ),
  createData(
    'Russell',
    'lou.hull@mail.com.au',
    '045499149',
    'Louis',
    ' HubSpot, Inc.',
    '10/09/2020',
    6,
    '08/09/2020'
  ),
  createData(
    'Debra',
    'eric31@mail.com.au',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    2,
    '08/09/2020'
  ),
  createData(
    'ricky',
    'rhodes89@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    1,
    '08/09/2020'
  ),
  createData(
    'Lanny',
    'price41@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    5,
    '08/09/2020'
  ),
  createData(
    'Peter',
    'barbara.hester.gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    5,
    '08/09/2020'
  ),
  createData(
    'Rebecca',
    'thomas93@mail.com.au',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    6,
    '08/09/2020'
  ),
  createData(
    'David',
    'david59@yahoo.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    4,
    '08/09/2020'
  ),
  createData(
    'Marc',
    'waaso.stanley@gmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    2,
    '08/09/2020'
  ),
  createData(
    'Nancy',
    'daniel.thompson@hotmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    3,
    '08/09/2020'
  ),
  createData(
    'Jose',
    'joyce41@hotmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    3,
    '08/09/2020'
  ),
  createData(
    'Linda',
    'timothy.west@yahoo.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    5,
    '08/09/2020'
  ),
  createData(
    'Whitney',
    'sterling18@hotmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    7,
    '08/09/2020'
  ),
  createData(
    'Dana',
    'robert40@hotmail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    8,
    '08/09/2020'
  ),
  createData(
    'Bonnie',
    'egan54@mail.com',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    1,
    '08/09/2020'
  ),
  createData(
    'Ray',
    'mattie.lewis@mail.com.au',
    '045499149',
    'Louis',
    'HubSpot, Inc.',
    '10/09/2020',
    2,
    '08/09/2020'
  ),
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ff9100',
    },
  },

});

function EnhancedTable() {
  const [columns, setColumns] = useState(getColumns());
  const [data, setData] = useState(rows);
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        title={null}
        columns={columns}
        data={data}
        icons={tableIcons}
        // onSelectionChange={(rows) => console.log(rows)}
        actions={[
          { tooltip: 'Remove All Selected Contacts',
            icon: DeleteIcon,
            onClick: (evt, selectedRow) => new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const names = [];
                for (const item of selectedRow) {
                  names.push(item.name);
                }
                for (let i = 0; i < dataDelete.length; ) {
                  if (names.includes(dataDelete[i].name)) {
                    dataDelete.splice(i, 1);
                    continue;
                  }
                  i++;
                }
                setData([...dataDelete]);
              }, 500);
            })
          }, {
            tooltip: 'Edit contact',
            icon: EditIcon,
            onClick: (event, rowData) => {
              console.log(rowData)
              // TODO1: 需要一个弹窗输入信息
            }
        }]}
        onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow.tableData.id)}
        options={{
          selection: true,
          filtering: false,
          grouping: false,
          search: true,
          sorting: true,
          exportButton: true,
            // TODO2
            // exportCsv: (columns, data) => {
            //   data.length
            // },
          pageSize: 10,
          pageSizeOptions: [10, 30, 50],
        }}
        editable={{
          onRowAdd: newData =>
          // TODO3: 实现添加的验证
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 500)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // TODO3: 实现输入的验证
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
  )
}



export default EnhancedTable;

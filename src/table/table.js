import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableHead from './components/enhancedTableHead';
import EnhancedTableToolbar from './components/enhancedTableToolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function createData(name, email, phoneNumber, contactOwner, 
  associatedCompany, lastActivityDate, leadStatus, createDate) {
  return { name, email, phoneNumber, contactOwner, 
    associatedCompany, lastActivityDate, leadStatus, createDate };
}

const rows = [
  createData('John', 'fqwfqwd@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Louis', 'affq@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Eclair', '343ewf@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Mary', '413fqw@gmail.com', '045499149', 'Louis',' HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Brian', 'edgar61@hotmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Keith', 'elias82@yahoo.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Larry', 'webb80@mail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Jason', 'billy73@mail.com.au', '045499149', 'Louis',' HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Joseph', 'parlin.joseph@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Samuel', 'tebo84@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Lori', 'davis1@hotmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Russell', 'lou.hull@mail.com.au', '045499149', 'Louis',' HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Debra', 'eric31@mail.com.au', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('ricky', 'rhodes89@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Lanny', 'price41@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Peter', 'barbara.hester.gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Rebecca', 'thomas93@mail.com.au', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('David', 'david59@yahoo.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Marc', 'waaso.stanley@gmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Nancy', 'daniel.thompson@hotmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Jose', 'joyce41@hotmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Linda', 'timothy.west@yahoo.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Whitney', 'sterling18@hotmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Dana', 'robert40@hotmail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Bonnie', 'egan54@mail.com', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),
  createData('Ray', 'mattie.lewis@mail.com.au', '045499149', 'Louis', 'HubSpot, Inc.', '10/09/2020', 'Busy', '08/09/2020'),

];


function descendingComparator(itemA, itemB, orderBy) {
  if (itemB[orderBy] < itemA[orderBy]) {
    return -1;
  }
  if (itemB[orderBy] > itemA[orderBy]) {
    return 1;
  }
  return 0;
}

// (a, b)怎么传入
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// 原理不明
function stableSort(array, comparator) {
  const stabilizedThis = array.map((element, index) => [element, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;      
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((element) => element[0]);
}

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} rowCount={rows.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      style={{ background: isItemSelected ? "#A8D8B9" : 'white' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          color='default'
                        />
                      </TableCell>
                      {/* <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell> */}
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phoneNumber}</TableCell>
                      <TableCell align="right">{row.contactOwner}</TableCell>
                      <TableCell align="right">{row.associatedCompany}</TableCell>
                      <TableCell align="right">{row.lastActivityDate}</TableCell>
                      <TableCell align="right">{row.leadStatus}</TableCell>
                      <TableCell align="right">{row.createDate}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (53) * emptyRows, hover: true }}>
                  <TableCell colSpan={6}  />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20, 30, 40]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}







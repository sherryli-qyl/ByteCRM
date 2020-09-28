import React from "react";
import { NavLink } from "react-router-dom";
import getDate from './getDate';

// 生成假数据的暂时方法
function createData(
  // index,
  name,
  email,
  phoneNumber,
  contactOwner,
  associatedCompany,
  lastActivityDate,
  leadStatus,
  createDate
) {
  return {
    name: (
      <NavLink activeClassName="active" to="/contacts/main">
        {name}
      </NavLink>
    ),
    email: email,
    phoneNumber: phoneNumber,
    contactOwner: contactOwner,
    associatedCompany: associatedCompany,
    lastActivityDate: lastActivityDate,
    leadStatus: leadStatus,
    createDate: createDate,
    // id: index,
  };
}

const nameSet = [
  "Brian Halligan",
  "John wick",
  "Bruce Lee",
  "Eclair Young",
  "Mary McGregor",
];

const ownerSet = [
  'James',
  'Mike',
  'Kay',
  'Alice',
  "Unassigned"
]

const phoneNumSet = [
  '0454991490',
  '0468080886',
  '0409875648',
  '0441387946',
  '0417899416'
]

const emailSet = [
  'fqwfqwd@gmail.com',
  'wqrw@hotmail.com',
  'u1489479@anu.edu.au',
  'qjioqjw@mail.com',
  'noAddress@outlook.com'
]

const dateSet = [
  '02/30/2020',
  '04/31/2020',
  '06/31/2020',
  '09/31/2020',
  '11/31/2020',
]

const companySet = [
  'Hubspot, Inc.',
  'Intel',
  'AMD',
  'NVIDIA',
  'Google',
]

function generateData() {
  let result = [];
  for (let i = 1; i < 100; i++) {
    result.push(
      createData(
        nameSet[Math.floor(Math.random() * 5)],
        emailSet[Math.floor(Math.random() * 5)],
        phoneNumSet[Math.floor(Math.random() * 5)],
        ownerSet[Math.floor(Math.random() * 5)],
        companySet[Math.floor(Math.random() * 5)],
        dateSet[Math.floor(Math.random() * 5)],
        Math.floor(Math.random() * 8),
        getDate()
      )
    );
  }
  return result;
}

const addRowsToTable = (oldTable, newData) => {
  if (newData.length === 0) {
    return oldTable;
  }
  for (const item of newData) {
    oldTable.push(item);
  }
  return oldTable;
};

const editTable = (oldTable, newValue) => {
  if (newValue.size !== 0) {
    const iterator = newValue.values();
    const dataToEdit = iterator.next().value;
    const index = iterator.next().value;
    const field = newValue.keys().next().value;
    for (const i of index) {
      let curRow = oldTable[i];
      Object.keys(curRow).forEach((key) => {
        if (key === field) {
          curRow[key] = dataToEdit;
        }
      });
    }
    return oldTable;
  }
};

const getTable = (id, userAccount, getNewDataFromCSV, updateTable, getDataToEdit) => {
  const newTable = updateTable();
  if (newTable) {
    return newTable;
  }

  let tableData = generateData();
  const newRows = getNewDataFromCSV();
  if (newRows) {
    for (const item of newRows) {
      tableData.push(item);
    }
    return tableData;
  }

  let rowsToEdit = getDataToEdit();
  if (rowsToEdit) {
    return editTable(tableData, rowsToEdit);
  }

  if (id === 1) {
    return tableData;
  } else if (id === 2) {
    let mine = [];
    for (const item of tableData) {
      if (item.contactOwner === userAccount) {
        mine.push(item);
      }
    }
    // console.log("getTable -> mine", mine);
    return mine;
  } else if (id === 3) {
    let unassigned = [];
    for (const item of tableData) {
      if (item.contactOwner === "Unassigned") {
        unassigned.push(item);
      }
    }
    // console.log("getTable -> unassigned", unassigned);
    return unassigned;
  }
};

export { addRowsToTable, editTable, getTable };

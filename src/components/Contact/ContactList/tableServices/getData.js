import React from "react";
import { NavLink } from "react-router-dom";
import getDate from "./getDate";

const nameSet = [
  "Brian Halligan",
  "John wick",
  "Bruce Lee",
  "Eclair Young",
  "Mary McGregor",
];

const ownerSet = ["James", "Mike", "Kay", "Alice", "Unassigned"];

const phoneNumSet = [
  "0454991490",
  "0468080886",
  "0409875648",
  "0441387946",
  "0417899416",
];

const emailSet = [
  "fqwfqwd@gmail.com",
  "wqrw@hotmail.com",
  "u1489479@anu.edu.au",
  "qjioqjw@mail.com",
  "noAddress@outlook.com",
];

const dateSet = [
  "02/30/2020",
  "04/31/2020",
  "06/31/2020",
  "09/31/2020",
  "11/31/2020",
];

const companySet = ["Hubspot, Inc.", "Intel", "AMD", "NVIDIA", "Google"];

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
  return {
    name: (
      <NavLink activeClassName="active" to="/contacts/main">
        {name}
      </NavLink>
    ),
    email: email,
    phoneNumber: phoneNumber,
    contactOwner: contactOwner,
    associatedCompany: (
      <NavLink activeClassName="active" to="/companies/main">
        {associatedCompany}
      </NavLink>
    ),
    lastActivityDate: lastActivityDate,
    leadStatus: leadStatus,
    createDate: createDate,
  };
}

function generateData() {
  let result = [];
  for (let i = 0; i < 10; i++) {
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

/* ======================================================= */
function wrapUpData(tableData) {  
  let result = [];
  for (let i = 0; i < tableData.length; i++) {
    result.push(
      createData(
        tableData[i]["name"],
        tableData[i]["email"],
        tableData[i]["phoneNumber"],
        tableData[i]["contactOwner"],
        tableData[i]["associatedCompany"],
        tableData[i]["lastActivityDate"],
        tableData[i]["leadStatus"],
        tableData[i]["createDate"]
      )
    );
  }
  return result;
}

const normalizeData = (tableData) => {
  for (let i = 0; i < tableData.length; i++) {
    let curRow = tableData[i];
    Object.keys(curRow).forEach((key) => {
      if (key === "name" || key === "associatedCompany") {
        curRow[key] = curRow[key].props.children;
      }
    });
  }
  return tableData;
};
/* ======================================================= */

let tableData = generateData();

const updateDatabase = (newTable) => {
  tableData = newTable;
};

// 先往数据库加，再取全部，再调用generateData()
const addRowsToTable = (newData) => {
  if (newData.length === 0) {
    return tableData;
  }
  let normalizedTable = normalizeData(tableData);
  for (const item of newData) {
    normalizedTable.push(item);
  }
  tableData = wrapUpData(normalizedTable);
  return tableData;
};

// 先往数据库改，再取全部，再调用generateData()
const editTable = (newValue) => {
  if (newValue && newValue.size !== 0) {
    let normalizedTable = normalizeData(tableData);
    const iterator = newValue.values();
    const dataToEdit = iterator.next().value;
    const index = iterator.next().value;
    const field = newValue.keys().next().value;
    for (const i of index) {
      let curRow = normalizedTable[i];
      Object.keys(curRow).forEach((key) => {
        if (key === field) {
          curRow[key] = dataToEdit;
        }
      });
    }
    tableData = wrapUpData(normalizedTable);
    return tableData;
  }
};

// tableData从数据库来
const getTable = (id, userAccount) => {
  if (id === 1) {
    return tableData;
  } else if (id === 2) {
    let mine = [];
    for (const item of tableData) {
      if (item.contactOwner === userAccount) {
        mine.push(item);
      }
    }
    return mine;
  } else if (id === 3) {
    let unassigned = [];
    for (const item of tableData) {
      if (item.contactOwner === "Unassigned") {
        unassigned.push(item);
      }
    }
    return unassigned;
  }
};

export { addRowsToTable, editTable, getTable, updateDatabase };

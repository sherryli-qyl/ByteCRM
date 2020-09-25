import React from "react";
import { NavLink } from "react-router-dom";

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
// let id = 0;

function generateData() {
  let result = [];
  for (let i = 1; i < 100; i++) {
    result.push(
      createData(
        nameSet[Math.floor(Math.random() * 5)],
        "fqwfqwd@gmail.com",
        "0454991490",
        "James",
        "Hubspot, Inc.",
        "10/09/2020",
        Math.floor(Math.random() * 8),
        "08/09/2020"
        // id++,
      )
    );
  }
  return result;
}

let Rows = generateData();

function addData(oldData, newData) {
  if (newData.length === 0) {
    return oldData;
  }
  for (const item of newData) {
    oldData.push(item);
  }
  return oldData;
}

function replaceData(oldData, index, field, newValue) {

}

// TODO: 只负责拿到table的初始数据，把add和edit分离出来
const getRows = (id, userAccount, newData, dataToEdit) => {
  if (dataToEdit.size > 0) {
    let field = "",
      newValue = "",
      index = [];
    dataToEdit.forEach((key, value) => {
      if (key === "index") {
        index = value;
      } else {
        field = key;
        newValue = value;
      }
    });
    return replaceData()
  }

  if (id === 1) {
    return addData(Rows, newData);
  } else if (id === 2) {
    let mine = [];
    let newRows = addData(Rows, newData);
    for (const item of newRows) {
      if (item.contactOwner === userAccount) {
        mine.push(item);
      }
    }
    return mine;
  } else if (id === 3) {
    let unassigned = [];
    let newRows = addData(Rows, newData);
    for (const item of newRows) {
      if (item.contactOwner === "Unassigned") {
        unassigned.push(item);
      }
    }
    return unassigned;
  }
};

export default getRows;

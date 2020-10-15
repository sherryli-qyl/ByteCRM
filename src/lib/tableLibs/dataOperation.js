import React from "react";
import JumpButton from "../../components/Contact/ContactList/components/PageWrapper/components/TableWrapper/components/EnhancedTable/components/JumpButton";


const addRowsFromCsv = (newData) => {
  // if (newData.length === 0) {
  //   return tableData;
  // }
  // let normalizedTable = normalizeData(tableData);
  // for (const item of newData) {
  //   normalizedTable.push(item);
  // }
  // tableData = wrapUpData(normalizedTable);
  // return tableData;
};


const editColumns = (newValue) => {
  // if (newValue && newValue.size !== 0) {
  //   let normalizedTable = normalizeData(tableData);
  //   const iterator = newValue.values();
  //   const dataToEdit = iterator.next().value;
  //   const index = iterator.next().value;
  //   const field = newValue.keys().next().value;
  //   for (const i of index) {
  //     let curRow = normalizedTable[i];
  //     Object.keys(curRow).forEach((key) => {
  //       if (key === field) {
  //         curRow[key] = dataToEdit;
  //       }
  //     });
  //   }
  //   tableData = wrapUpData(normalizedTable);
  // return tableData;
};

/* ====================================GET========================================== */
function wrapUpData(data) {
  return data.map((cur) => {
    return {
      name: <JumpButton id={cur.contactID} type={"contact"} name={cur.name} />,
      contactID: cur.contactID,
      companyID: cur.companyID,
      email: cur.email,
      phoneNumber: cur.phoneNumber,
      contactOwner: cur.contactOwner,
      associatedCompany: (
        <JumpButton
          id={cur.companyID}
          type={"company"}
          name={cur.associatedCompany}
        />
      ),
      lastActivityDate: cur.lastActivityDate,
      leadStatus: cur.leadStatus,
      createDate: cur.createDate,
    };
  });
}

const processData = (data) => {
  let newOwner;
  if (typeof data.contactOwner === "object") {
    newOwner = data.contactOwner.fullName;
  }
  return {
    name: data.fullName,
    contactID: data.id,
    companyID: data.company ? data.company.code : undefined,
    phoneNumber: data.phoneNo,
    email: data.email,
    contactOwner: newOwner ? newOwner : data.contactOwner,
    associatedCompany:
      typeof data.company === "object" ? data.company.name : data.company,
    lastActivityDate: data.lastActivityDate,
    leadStatus: data.leadStatus,
    createDate: data.createDate,
  };
};

const getTable = (data, tabID, userAccount) => {
  if (tabID === 1) {
    return wrapUpData(data);
  } else if (tabID === 2) {
    let mine = [];
    for (const item of data) {
      if (item.contactOwner === userAccount) {
        mine.push(item);
      }
    }
    return wrapUpData(mine);
  } else if (tabID === 3) {
    let unassigned = [];
    for (const item of data) {
      if (item.contactOwner === "Unassigned") {
        unassigned.push(item);
      }
    }
    return wrapUpData(unassigned);
  }
};

/* ====================================DELETE========================================== */
function remove(allData, selectedRow) {
  const names = [];
  for (const item of selectedRow) {
    names.push(item.name);
  }
  for (let i = 0; i < allData.length; ) {
    if (names.includes(allData[i].name)) {
      allData.splice(i, 1);
      continue;
    }
    i++;
  }
  return allData;
}

export {
  addRowsFromCsv,
  editColumns,
  getTable,
  processData,
  remove,
};

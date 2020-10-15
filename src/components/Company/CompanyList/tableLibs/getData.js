import React from "react";
import { NavLink } from "react-router-dom";

// const url = 'http://localhost:3000/api/companys/';

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

const dateSet = [
  "02/30/2020",
  "04/31/2020",
  "06/31/2020",
  "09/31/2020",
  "11/31/2020",
];

const companySet = ["Hubspot, Inc.", "Intel", "AMD", "NVIDIA", "Google"];

/* ======================================================= */
// function wrapUpData(tableData) {
//   let result = [];
//   for (let i = 0; i < tableData.length; i++) {
//     result.push(
//       createData(
//         tableData[i]["name"],
//         tableData[i]["email"],
//         tableData[i]["phoneNumber"],
//         tableData[i]["companyOwner"],
//         tableData[i]["associatedCompany"],
//         tableData[i]["lastActivityDate"],
//         tableData[i]["leadStatus"],
//         tableData[i]["createDate"]
//       )
//     );
//   }
//   return result;
// }

// const normalizeData = (tableData) => {
//   for (let i = 0; i < tableData.length; i++) {
//     let curRow = tableData[i];
//     Object.keys(curRow).forEach((key) => {
//       if (key === "name" || key === "associatedCompany") {
//         curRow[key] = curRow[key].props.children;
//       }
//     });
//   }
//   return tableData;
// };
/* ======================================================= */

function postData(url, data) {
  let urlObj = new URL(url);
  return fetch(urlObj, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
}

function getData(url, data) {
  let urlObj = new URL(url);
  return fetch(urlObj, {
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
}

function putData(url, data) {
  let urlObj = new URL(url);
  return fetch(urlObj, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
}

function deleteData(url, data) {
  let urlObj = new URL(url);
  return fetch(urlObj, {
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
}


// TODO: 先往数据库加，再调用generateData()
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

// 先往数据库改，再调用generateData()
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

function wrapUpData(data) {
  const temp = data.map((cur) => {
    return {
      name: (
        <button className='nakedBtn'
                onClick ={(event)=>{
                  event.preventDefault();
                  sessionStorage.setItem('code',cur.code);
                }}>
          <NavLink
          activeClassName="active"
          to={{
            pathname: "/companies/main",
          }}
        >
          {cur.name}
        </NavLink>
        </button>
        
      ),
      phoneNumber: cur.phoneNumber,
      companyOwner: cur.companyOwner,
      lastActivityDate: cur.lastActivityDate,
      city: cur.city,
      country: cur.country,
      industry: cur.industry,
      createDate: cur.createDate,
    };
  });
  return temp;
}

const processData = (data) => {
  let newOwner;
  if (typeof(data.companyOwner) === 'object') {
    newOwner = data.companyOwner.name;
  }
  return {
    name: data.name,
    id: data.id,
    phoneNumber: data.phoneNumber,
    companyOwner: newOwner ? newOwner : data.companyOwner,
    lastActivityDate: data.lastActivityDate,
    city: data.city,
    country: data.country,
    industry: data.industry,
    createDate: data.createDate,
  };
};

const getTable = (data, tabID, userAccount) => {
  if (tabID === 1) {
    return wrapUpData(data);
  } else if (tabID === 2) {
    let mine = [];
    for (const item of data) {
      if (item.companyOwner === userAccount) {
        mine.push(item);
      }
    }
    return wrapUpData(mine);
  } else if (tabID === 3) {
    let unassigned = [];
    for (const item of data) {
      if (item.companyOwner === "Unassigned") {
        unassigned.push(item);
      }
    }
    return wrapUpData(unassigned);
  }
};

export { addRowsFromCsv, editColumns, getTable, processData };

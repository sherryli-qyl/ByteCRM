import React from 'react';
import JumpButton from '../../pages/ListPageWrapper/components/TableWrapper/components/EnhancedTable/components/JumpButton';

import getDate from './getDate';

const LEAD_STATUS = {
  1: 'New',
  2: 'Open',
  3: 'In progress',
  4: 'Open deal',
  5: 'Unqualified',
  6: 'Attempted to contact',
  7: 'Connected',
  8: 'Bad timing',
};

const LEAD_STATUS_BACK = {
  New: 1,
  Open: 2,
  'In progress': 3,
  'Open deal': 4,
  Unqualified: 5,
  'Attempted to contact': 6,
  Connected: 7,
  'Bad timing': 8,
};

/* ====================================GET========================================== */
function wrapUpData(data, type) {
  if (type === 'contact') {
    return data.map((cur) => ({
      name: (
        <JumpButton id={cur.contactID} type="contact" name={cur.name} />
      ),
      contactID: cur.contactID,
      companyID: cur.companyID,
      email: cur.email,
      phoneNumber: cur.phoneNumber,
      contactOwner: cur.contactOwner,
      associatedCompany: (
        <JumpButton
          id={cur.companyID}
          type="company"
          name={cur.associatedCompany}
        />
      ),
      lastActivityDate: cur.lastActivityDate,
      leadStatus: cur.leadStatus,
      createDate: cur.createDate,
    }));
  } if (type === 'company') {
    return data.map((cur) => {
      let newOwners;
      const temp = [];
      if (cur.associatedContacts.length !== 0 && cur.contactID.length !== 0) {
        for (const i in cur.contactID) {
          temp.push(
            <JumpButton
              key={cur.contactID[i]}
              id={cur.contactID[i]}
              type="contact"
              name={cur.associatedContacts[i]}
            />,
          );
        }
      }
      newOwners = <>{temp.map((cur) => cur)}</>;
      return {
        name: (
          <JumpButton
            key={cur.companyID}
            id={cur.companyID}
            type="company"
            name={cur.name}
          />
        ),
        associatedContacts: newOwners || undefined,
        companyOwner: cur.companyOwner,
        companyID: cur.companyID,
        phoneNumber: cur.phoneNumber,
        companyOwner: cur.companyOwner,
        city: cur.city,
        country: cur.country,
        industry: cur.industry,
        lastLoggedCallDate: cur.lastLoggedCallDate,
      };
    });
  }
}

const processData = (data, type) => {
  if (type === 'contact') {
    let newOwner;
    if (typeof data.contactOwner === 'object') {
      newOwner = data.contactOwner.fullName;
    } else if (!data.contactOwner) {
      newOwner = 'Unassigned';
    }
    return {
      name: data.fullName,
      contactID: data.id,
      companyID: data.company ? data.company.code : undefined,
      phoneNumber: data.phoneNo,
      email: data.email,
      contactOwner: newOwner || data.contactOwner,
      associatedCompany:
        typeof data.company === 'object' ? data.company.name : data.company,
      lastActivityDate: data.lastActivityDate,
      leadStatus: LEAD_STATUS_BACK[data.leadStatus],
      createDate: data.createDate,
    };
  }
  let newOwner;
  let contacts = [];
  let contactID = [];
  if (typeof data.companyOwner === 'object') {
    newOwner = data.companyOwner.fullName;
  } else if (!data.companyOwner) {
    newOwner = 'Unassigned';
  }
  if (typeof data.associatedContacts === 'object') {
    contacts = data.associatedContacts.map((cur) => cur.fullName);
    contactID = data.associatedContacts.map((cur) => cur.id);
  } else if (!data.associatedContacts) {
    contacts = contactID = undefined;
  }
  return {
    name: data.name,
    companyID: data.id,
    contactID: data.associatedContacts ? contactID : undefined,
    phoneNumber: data.phoneNumber,
    companyOwner: newOwner || undefined,
    associatedContacts: data.associatedContacts ? contacts : undefined,
    lastLoggedCallDate: data.lastLoggedCallDate,
    city: data.city,
    country: data.country,
    industry: data.industry,
  };
};

const getTable = (data, tabID, userAccount, type) => {
  if (tabID === 1) {
    return wrapUpData(data, type);
  } if (tabID === 2) {
    const mine = [];
    if (type === 'contact') {
      for (const item of data) {
        if (item.contactOwner === userAccount) {
          mine.push(item);
        }
      }
    } else {
      for (const item of data) {
        if (item.companyOwner === userAccount) {
          mine.push(item);
        }
      }
    }
    return wrapUpData(mine, type);
  } if (tabID === 3) {
    const unassigned = [];
    if (type === 'contact') {
      for (const item of data) {
        if (item.contactOwner === 'Unassigned') {
          unassigned.push(item);
        }
      }
    } else {
      for (const item of data) {
        if (item.companyOwner === 'Unassigned') {
          unassigned.push(item);
        }
      }
    }
    return wrapUpData(unassigned, type);
  }
};

/* ====================================DELETE========================================== */
function remove(allData, selectedRow) {
  const names = [];
  for (const item of selectedRow) {
    names.push(item.name);
  }
  for (let i = 0; i < allData.length;) {
    if (names.includes(allData[i].name)) {
      allData.splice(i, 1);
      continue;
    }
    i++;
  }
  return allData;
}

/* =====================================POST============================================== */
function makeNewRow(newData, type) {
  if (type === 'contact') {
    newData.createDate = getDate();
    // if (!newData.contactOwner) {
    //   newData.contactOwnerFirstName = "Unassigned";
    //   newData.contactOwnerLastName = undefined;
    //   delete newData.contactOwner;
    // } else {
    //   let tempName = newData.contactOwner.split(" ");
    //   newData.contactOwnerFirstName = tempName[0];
    //   newData.contactOwnerLastName =
    //     tempName.length > 1 ? tempName[1] : undefined;
    //   delete newData.contactOwner;
    // }
    delete newData.contactOwner;
    if (newData.phoneNumber) {
      newData.phoneNo = newData.phoneNumber;
      delete newData.phoneNumber;
    }
    // if (newData.associatedCompany) {
    //   newData.companyName = newData.associatedCompany;
    //   delete newData.associatedCompany;
    // }
    delete newData.associatedCompany;
    if (newData.leadStatus) {
      newData.leadStatus = LEAD_STATUS[newData.leadStatus];
    }
    const tempName = newData.name.split(' ');
    newData.firstName = tempName[0];
    newData.lastName = tempName.length > 1 ? tempName[1] : undefined;
    delete newData.name;
    return newData;
  } if (type === 'company') {
    return newData;
  }
}

export {
  getTable, processData, makeNewRow, remove,
};

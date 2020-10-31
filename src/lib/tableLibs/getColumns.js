import getDate from './getDate';
import { testPhoneNum, testEmailAddr, testDate } from './validation';

function getColumns(type) {
  if (type === 'contact') {
    return [
      {
        title: 'NAME',
        field: 'name',
        initialEditValue: '',
        validate: (rowData) => (rowData.name === ''
          ? { isValid: false, helperText: 'Name cannot be empty' }
          : true),
      },
      {
        title: 'EMAIL',
        field: 'email',
        validate: (rowData) => (testEmailAddr(rowData.email)
          ? true
          : { isValid: false, helperText: 'Email address format incorrect' }),
      },
      {
        title: 'PHONE NUMBER',
        field: 'phoneNumber',
        validate: (rowData) => (testPhoneNum(rowData.phoneNumber)
          ? true
          : { isValid: false, helperText: 'Phone number format incorrect' }),
      },

      { title: 'CONTACT OWNER', field: 'contactOwner', editable: 'never' },
      { title: 'ASSOCIATED COMPANY', field: 'associatedCompany', editable: 'never' },
      {
        title: 'LAST ACTIVITY DATE',
        field: 'lastActivityDate',
        initialEditValue: getDate(),
        validate: (rowData) => {
          if (
            rowData.lastActivityDate === ''
            || testDate(rowData.lastActivityDate)
          ) {
            return true;
          }
          return { isValid: false, helperText: 'Date format incorrect' };
        },
      },
      {
        title: 'LEAD STATUS',
        field: 'leadStatus',
        lookup: {
          1: 'New',
          2: 'Open',
          3: 'In progress',
          4: 'Open deal',
          5: 'Unqualified',
          6: 'Attempted to contact',
          7: 'Connected',
          8: 'Bad timing',
        },
      },
      {
        title: 'CREATE DATE',
        field: 'createDate',
        editable: 'never',
      },
    ];
  } if (type === 'company') {
    return [
      {
        title: 'NAME',
        field: 'name',
        initialEditValue: '',
        validate: (rowData) => (rowData.name === ''
          ? { isValid: false, helperText: 'Name cannot be empty' }
          : true),
      },
      {
        title: 'PHONE NUMBER',
        field: 'phoneNumber',
        validate: (rowData) => (testPhoneNum(rowData.phoneNumber)
          ? true
          : { isValid: false, helperText: 'Phone number format incorrect' }),
      },
      { title: 'COMPANY OWNER', field: 'companyOwner', editable: 'never' },
      {
        title: 'CITY',
        field: 'city',
      },
      {
        title: 'COUNTRY',
        field: 'country',
      },
      {
        title: 'INDUSTRY',
        field: 'industry',
      },
      {
        title: 'LAST LOGGED CALL DATE',
        field: 'lastLoggedCallDate',
        initialEditValue: getDate(),
        validate: (rowData) => {
          if (
            rowData.lastLoggedCallDate === ''
            || testDate(rowData.lastLoggedCallDate)
          ) {
            return true;
          }
          return { isValid: false, helperText: 'Date format incorrect' };
        },
      },
      { title: 'ASSOCIATED CONTACTS', field: 'associatedContacts', editable: 'never' },
    ];
  }
}

export default getColumns;

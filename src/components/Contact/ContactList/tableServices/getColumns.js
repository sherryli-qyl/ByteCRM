import getDate from './getDate';
import { testPhoneNum, testEmailAddr, testDate } from './validation';

function getColumns() {
    return ([
      { title: 'Name', field: 'name', type: 'string', initialEditValue: '',
        validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'Name cannot be empty' } : true},
      { title: 'Email', field: 'email', type: 'string', 
        validate: (rowData) => testEmailAddr(rowData.email) ? true : { isValid: false, helperText: 'Email address format incorrect' }},
      { title: 'Phone', field: 'phoneNumber', type: 'string',
        validate: (rowData) => testPhoneNum(rowData.phoneNumber) ? true : { isValid: false, helperText: 'Phone number format incorrect' }},
      { title: 'ContactOwner', field: 'contactOwner', type: 'string', },
      { title: 'AssociatedCompany', field: 'associatedCompany', type: 'string' },
      { title: 'LastActivityDate', field: 'lastActivityDate', type: 'string', initialEditValue: getDate(),
        validate: (rowData) => {
          if (rowData.lastActivityDate === '' || testDate(rowData.lastActivityDate)) {
            return true;
          } 
          return { isValid: false, helperText: 'Date format incorrect' };}
      },
      { title: 'LeadStatus', field: 'leadStatus', type: 'string', 
        lookup: { 1: 'New', 2: 'Open', 3: 'In progress', 4: 'Open deal', 5: 'Unqualified', 6: 'Attempted to contact', 7: 'Connected', 8: 'Bad timing' },
      },
      { title: 'CreateDate', field: 'createDate', type: 'string', editable: 'never' },
      // { title: 'ID', field: 'id', type: 'numeric' },
    ])
};

export default getColumns;
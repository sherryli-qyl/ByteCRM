import { ExportToCsv } from 'export-to-csv';
import getDate from './getDate';

const exportCSV = (columns, data, type) => {
  if (data.length === 0) {
    return;
  }
  const tempData = JSON.parse(JSON.stringify(data));
  const result = [];
  switch (type) {
    case 'contact': {
      const transform = new Map([
        [1, 'New'],
        [2, 'Open'],
        [3, 'In progress'],
        [4, 'Open deal'],
        [5, 'Unqualified'],
        [6, 'Attempted to contact'],
        [7, 'Connected'],
        [8, 'Bad timing'],
      ]);
      for (let i = 0; i < tempData.length; i++) {
        result[i] = {};
        result[i].name = tempData[i].name;
        result[i]['phone number'] = tempData[i].phoneNumber
          ? tempData[i].phoneNumber
          : '';
        result[i].email = tempData[i].email ? tempData[i].email : '';
        result[i]['associated company'] = tempData[i].associatedCompany
          ? tempData[i].associatedCompany
          : '';
        result[i]['contact owner'] = tempData[i].contactOwner
          ? tempData[i].contactOwner
          : '';
        result[i]['lead status'] = tempData[i].leadStatus
          ? transform.get(tempData[i].leadStatus)
          : '';
        result[i]['last activity date'] = tempData[i].lastActivityDate
          ? tempData[i].lastActivityDate
          : '';
        result[i]['create date'] = tempData[i].createDate
          ? tempData[i].createDate
          : '';
      }
      break;
    }
    case 'company': {
      for (const i in tempData) {
        result[i] = {};
        result[i].name = tempData[i].name;
        result[i]['phone number'] = tempData[i].phoneNumber ? tempData[i].phoneNumber : '';
        result[i]['company owner'] = tempData[i].companyOwner ? tempData[i].companyOwner : '';
        result[i].city = tempData[i].city ? tempData[i].city : '';
        result[i].country = tempData[i].country ? tempData[i].country : '';
        result[i].industry = tempData[i].industry ? tempData[i].industry : '';
        result[i]['last logged call date'] = tempData[i].lastLoggedCallDate
          ? tempData[i].lastLoggedCallDate
          : '';
      }
      break;
    }
    default:
      throw new Error("Unexpected page type!");
  }

  let fileName = "";
  if (type === 'company') {
    fileName = `ByteCRM-companies-${getDate()}`;
  } else {
    fileName = `ByteCRM-contacts-${getDate()}`;
  }
  const csvExporter = new ExportToCsv(
    // configure CSV generator
    {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      filename: fileName,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    });
  csvExporter.generateCsv(result);
};

export default exportCSV;

import { ExportToCsv } from 'export-to-csv';
import getDate from './getDate';

// 配置csv生成器
const Options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: false,
    filename: 'ByteCRM-exports-contact-'+getDate(),
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers: ['name', 'email', 'phoneNumber', 'contactOwner', 'associatedCompany', 'lastActivity', 'leadStatus', 'createDate']
};


const exportCSV = (columns, data) => {
  console.log(data)
    if (data.length === 0) {
      alert("No contacts to export!")
      return;
    }
    let tempData = JSON.parse(JSON.stringify(data));
    const transform = new Map([
      [1, 'New'], [2, 'Open'], [3, 'In progress'], [4, 'Open deal'], [5, 'Unqualified'], [6, 'Attempted to contact'], [7, 'Connected'], [8, 'Bad timing']
    ]);
    for (let item of tempData) {
      item.leadStatus = transform.get(item.leadStatus);
      delete item.tableData;
    }
    const csvExporter = new ExportToCsv(Options);
    csvExporter.generateCsv(tempData);
}

export default exportCSV;
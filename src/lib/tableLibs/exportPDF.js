import jsPDF from 'jspdf';
import getDate from './getDate';
import 'jspdf-autotable';

const exportPDF = (columns, data, type) => {
  console.log('exportPDF -> data', data);
  if (data.length === 0) {
    alert('No contacts to export!');
    return;
  }
  const tempData = JSON.parse(JSON.stringify(data));
  const temp = [];
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
        temp[i] = {};
        temp[i].name = tempData[i].name.props.name;
        temp[i]['phone number'] = tempData[i].phoneNumber
          ? tempData[i].phoneNumber
          : '';
        temp[i].email = tempData[i].email ? tempData[i].email : '';
        temp[i]['associated company'] = tempData[i].associatedCompany.props.name
          ? tempData[i].associatedCompany.props.name
          : '';
        temp[i]['contact owner'] = tempData[i].contactOwner
          ? tempData[i].contactOwner
          : '';
        temp[i]['lead status'] = tempData[i].leadStatus
          ? transform.get(tempData[i].leadStatus)
          : '';
        temp[i]['last activity date'] = tempData[i].lastActivityDate
          ? tempData[i].lastActivityDate
          : '';
        temp[i]['create date'] = tempData[i].createDate
          ? tempData[i].createDate
          : '';
      }
      break;
    }
    case 'company': {
      for (let i = 0; i < tempData.length; i++) {
        temp[i] = {};
        temp[i].name = tempData[i].name.props.name;
        temp[i]['phone number'] = tempData[i].phoneNumber
          ? tempData[i].phoneNumber
          : '';
        if (tempData[i].companyOwner) {
          let temp = '';
          for (let i = 0; i < tempData[i].companyOwner.props.length; i += 2) {
            temp
              += `${tempData[i].companyOwner.props.children[i].props.name}, `;
            if (
              i == tempData[i].companyOwner.props.length - 2
              || i == tempData[i].companyOwner.props.length - 1
            ) {
              temp = temp.slice(0, temp.length - 2);
            }
          }
          temp[i]['company owner'] = temp;
        } else {
          temp[i]['company owner'] = '';
        }
        temp[i].country = tempData[i].country ? tempData[i].country : '';
        temp[i].city = tempData[i].city ? tempData[i].city : '';
        temp[i].industry = tempData[i].industry ? tempData[i].industry : '';
        temp[i]['last activity date'] = tempData[i].lastActivityDate
          ? tempData[i].lastActivityDate
          : '';
        temp[i]['create date'] = tempData[i].createDate;
      }
      console.log('exportCSV -> temp', temp);
      break;
    }
  }
  console.log('exportPDF -> temp', temp);
  for (const i in temp) {
    result.push(Object.values(temp[i]));
  }
  const content = {
    startY: 50,
    head:
      type === 'contact'
        ? [[
          'name',
          'phone number',
          'email',
          'associated company',
          'contact owner',
          'lead status',
          'last activity date',
          'create date',
        ]]
        : [[
          'name',
          'phone number',
          'company owner',
          'country',
          'city',
          'industry',
          'last activity date',
          'create date',
        ]],
    body: result,
  };
  const doc = new jsPDF({
    orientation: 'landscape',
    size: 'A4',
    unit: 'pt',
  });
  doc.setFontSize(15);
  doc.text('', 40, 40);
  doc.autoTable(content);
  doc.save(`ByteCRM-contact-${getDate()}.pdf`);
};

export default exportPDF;

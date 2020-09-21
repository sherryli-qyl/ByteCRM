import getDate from './getDate';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const exportPDF = (columns, data) => {
    if (data.length === 0) {
      alert("No contacts to export!")
      return;
    }
    let tempData = JSON.parse(JSON.stringify(data));
    let dataToUse = [];
    const transform = new Map([
      [1, 'New'], [2, 'Open'], [3, 'In progress'], [4, 'Open deal'], [5, 'Unqualified'], [6, 'Attempted to contact'], [7, 'Connected'], [8, 'Bad timing']
    ]);
    for (let item of tempData) {
      item.leadStatus = transform.get(item.leadStatus);
      delete item.tableData;
    }
    for (let i in tempData) {
      dataToUse.push(Object.values(tempData[i]));
    }
    const content = {
      startY: 50,
      head: [columns.map((columnDef) => columnDef.title)],
      body: dataToUse,
    };
    const doc = new jsPDF({
      orientation: "landscape",
      size: "A4",
      unit: "pt"
    });
    doc.setFontSize(15);              
    doc.text('', 40, 40);
    doc.autoTable(content);
    doc.save(
      ('ByteCRM-exports-contact-'+getDate()) + ".pdf"
    );
}

export default exportPDF;
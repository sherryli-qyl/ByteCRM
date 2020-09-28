import React from "react";
import ReactFileReader from "react-file-reader";
import "./importer.scss";

function Importer(props) {
  const extractData = (
    name,
    email,
    phoneNumber,
    contactOwner,
    associatedCompany,
    lastActivityDate,
    leadStatus,
    createDate
  ) => {
    return {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      contactOwner: contactOwner,
      associatedCompany: associatedCompany,
      lastActivityDate: lastActivityDate,
      leadStatus: leadStatus,
      createDate: createDate,
    };
  };

  const convertArrayToObj = (array) => {
    return extractData(
      array[0],
      array[1],
      array[2],
      array[3],
      array[4],
      array[5],
      array[6],
      array[7]
    );
  };

  const reformatData = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (i !== 4) {
        data[i] = data[i].slice(1, data[i].length - 1);
      }
    }
    return data;
  };

  const processData = (allText) => {
    const allTextLines = allText.split(/\r\n|\n/);
    let lines = [];
    // remove headers
    allTextLines.splice(0, 1);
    // remove empty line
    allTextLines.splice(allTextLines.length - 1, 1);
    for (const line of allTextLines) {
      let items = line.split(",");
      if (items.length > 8) {
        const margin = items.length - 8;
        let company = "";
        let front = items.slice(0, 4);
        let back = items.slice(4 + margin + 1);
        for (let i = 0; i <= margin; i++) {
          company += i === margin ? items[4 + i] : items[4 + i] + ",";
        }
        company = company.slice(1, company.length - 1);
        items = front.concat([company]).concat(back);
        items = reformatData(items);
      }
      lines.push(convertArrayToObj(items));
    }
    return lines;
  };

  const handleFiles = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      props.getNewData(processData(reader.result));
    };
    reader.readAsText(file[0]);
  };

  return (
    <div>
      <ReactFileReader
        multipleFiles={false}
        fileTypes={[".csv"]}
        handleFiles={handleFiles}
      >
        <button className="btn">Import</button>
      </ReactFileReader>
    </div>
  );
}

export default Importer;

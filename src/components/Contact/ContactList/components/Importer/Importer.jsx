import React from 'react';
import ReactFileReader from 'react-file-reader';
import './importer.scss';


class Importer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          newData: [],
        }
    }
  
    extractData(
      name,
      email,
      phoneNumber,
      contactOwner,
      associatedCompany,
      lastActivityDate,
      leadStatus,
      createDate
    ) {
      return ({
          name: name, 
          email: email, 
          phoneNumber: phoneNumber, 
          contactOwner: contactOwner,
          associatedCompany: associatedCompany,
          lastActivityDate: lastActivityDate,
          leadStatus: leadStatus,
          createDate: createDate, 
        }
      );
    }
    
    convertArrayToObj(array) {
      return this.extractData(
        array[0],
        array[1],
        array[2],
        array[3],
        array[4],
        array[5],
        array[6],
        array[7],
        );
    }

    processData(allText) {
      const allTextLines = allText.split(/\r\n|\n/);
      let lines = [];
      // remove headers
      allTextLines.splice(0, 1);
      // remove empty line
      allTextLines.splice(allTextLines.length-1, 1);
      for (const line of allTextLines) {
        let items = line.split(',');
        if (items.length > 8) {
          const margin = items.length-8;
          let company = "";
          let front = items.slice(0, 4);
          let back = items.slice(4 + margin + 1);
          for (let i = 0 ; i <= margin; i++) {
            company += i === margin ? items[4 + i] : items[4 + i] + ',';
          }
          company = company.slice(1, company.length-1);
          items = front.concat([company]).concat(back);
        }
        lines.push(this.convertArrayToObj(items));
      }
      return lines;
    }

    handleFiles = (file) => {
      let reader = new FileReader();
      reader.onload = (e) => {
        // Use reader.result
        this.setState({
          newData: this.processData(reader.result)
        });
        this.props.getNewData(this.state.newData);
      }
      reader.readAsText(file[0]);
    }

    render() {
      return (
        <div>
          <ReactFileReader 
              multipleFiles={false}
              fileTypes={[".csv"]} 
              handleFiles={this.handleFiles}>
              <button className="btn" >Upload</button>
          </ReactFileReader>
        </div>
      );
    }
}

export default Importer;
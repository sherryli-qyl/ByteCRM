import React from 'react';
import "./EmailModal.scss";
import EmailFunctionBar from "./components/EmailFunctionBar";
import EmailHeader from './components/EmailHeader';
import EmailInput from './components/EmailInput';
import EmailSendBar from './components/EmailSend';

class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    const items = [
      { key: 'Templates', value: 'Templates' },
      { key: 'Sequences', value: 'Sequences' },
      { key: 'Documents', value: 'Documents' },
      { key: 'Meetings', value: 'Meetings' },
      { key: 'Quotes', value: 'Quotes' },
    ];

    const contacts = [
      {key:'John@gmail.com',email:'John@gmail.com', value:'John Wick'},
      {key:'John222@gmail.com',email:'John222@gmail.com', value:'John 1111 Wick'},
    ]
    this.state = {
      items,
      contacts
    }
    
  }
  
  render() {
    const { items,contacts } = this.state;
    return (
      <div className="emailModal">
        <EmailFunctionBar

          items={items}
        />
        <EmailHeader 
           contacts = {contacts}
        />
        <EmailInput/>
        <EmailSendBar/>
      </div>
    );
  }
}



export default EmailModal;
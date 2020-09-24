import React, { Component } from 'react';
import './InfoPage.scss';
import { faEnvelope, faEdit, faPhoneAlt, faCalendarAlt, faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import BasicInfo from './components/BasicInfo';
import DetailInfo from './components/DetailInfo';
import WebsiteActivity from './components/WebsiteActivity/WebsiteActivity';
import NoteModal from '../Modal/components/Function/Note';
import EmailModal from '../Modal/components/Function/Email';
import CallModal from '../Modal/components/Function/Call';
import TaskModal from '../Modal/components/Function/Task';
import MeetingModal from '../Modal/components/Function/Meeting';
class InfoPage extends Component {
  constructor(props) {
    super(props);
    const navItems = [
      { key: 'Note', value: 'Note', icon: faEdit, modal: <NoteModal /> },
      { key: 'Email', value: 'Email', icon: faEnvelope, modal: <EmailModal /> },
      { key: 'Call', value: 'Call', icon: faPhoneAlt, modal: <CallModal /> },
      { key: 'Log', value: 'Log', icon: faPlus, modal: '' },
      { key: 'Task', value: 'Task', icon: faTasks, modal: <TaskModal /> },
      { key: 'Meeting', value: 'Meet', icon: faCalendarAlt, modal: <MeetingModal /> },
    ];
    this.state = {
      navItems,
      currentModal: navItems[0],
      name: 'email',
    };
    this.onNavItemClick = this.onNavItemClick.bind(this);
  }

  onNavItemClick(selectedModal) {
    console.log('Switch to the ' + selectedModal.key);
    this.setState({
      currentModal: selectedModal,
    });
    this.props.openModal(selectedModal);
  }

  render() {
    const { navItems, currentModal } = this.state;
    return (
      <div className="InfoPage">
        <BasicInfo 
          contact = {this.props.contact}
          navItems={navItems}
          modalKey={currentModal.key}
          onNavItemClick={this.onNavItemClick}
        />

        <DetailInfo 
          contact = {this.props.contact}/>

        <WebsiteActivity />
      </div>
    );
  }
}

export default InfoPage;

import React, { Component } from 'react';
import './Basic.scss';
import IconNote from '../../../../../img/Contact/note.png';
import IconMail from '../../../../../img/Contact/mail.png';
import IconCall from '../../../../../img/Contact/call.png';
import IconLog from '../../../../../img/Contact/log.png';
import IconTask from '../../../../../img/Contact/task.png';
import IconMeeting from '../../../../../img/Contact/meeting.png';
import ContactHeader from './components/ContactHeader/ContactHeader';
import AboutContact from './components/AboutContact/AboutContact';
import WebsiteActivity from './components/WebsiteActivity/WebsiteActivity';
import ActivityBar from './components/ActivityBar/ActivityBar';
import NoteModal from '../../../../Modal/components/Function/Note';
import EmailModal from '../../../../Modal/components/Function/Email';
import CallModal from '../../../../Modal/components/Function/Call';

class Basic extends Component {
  constructor(props) {
    super(props);
    const navItems = [
      { key: 'Note', value: 'Note', src: IconNote, modal: <NoteModal /> },
      { key: 'Email', value: 'Email', src: IconMail, modal: <EmailModal /> },
      { key: 'Call', value: 'Call', src: IconCall, modal: <CallModal /> },
      { key: 'Log', value: 'Log', src: IconLog, modal: '' },
      { key: 'Task', value: 'Task', src: IconTask, modal: '' },
      { key: 'Meeting', value: 'Meeting', src: IconMeeting, modal: '' },
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
      <div className="contact_information">
        <ContactHeader />
        <div className="activity__list">
          <ActivityBar
            navItems={navItems}
            currentWindow={currentModal}
            onNavItemClick={this.onNavItemClick}
          />
        </div>
        <AboutContact />

        <WebsiteActivity />
      </div>
    );
  }
}

export default Basic;

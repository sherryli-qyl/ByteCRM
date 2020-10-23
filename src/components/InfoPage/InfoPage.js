import React, { Component } from 'react';
import { faEnvelope, faEdit, faPhoneAlt, faCalendarAlt, faPlus, faTasks,faUser,faBuilding} from "@fortawesome/free-solid-svg-icons";
import BasicInfo from './components/BasicInfo';
import DetailInfo from './components/DetailInfo';
import Modals from './services/Modals'
import DataPack from './services/DataPack';
import './InfoPage.scss';


class InfoPage extends Component {
  constructor(props) {
    super(props);
    const navItems = [
      { key: 'Note', value: 'Note', icon: faEdit, modal: Modals.noteModal},
      { key: 'Email', value: 'Email', icon: faEnvelope, modal: Modals.emailModal },
      { key: 'Call', value: 'Call', icon: faPhoneAlt, modal: Modals.callModal},
      { key: 'Log', value: 'Log', icon: faPlus, modal: '' },
      { key: 'Task', value: 'Task', icon: faTasks, modal: Modals.taskModal},
      { key: 'Meeting', value: 'Meet', icon: faCalendarAlt, modal: Modals.meetingModal },
    ];
    this.state = {
      navItems,
      currentModal: navItems[0],
      name: 'note',
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
    const {key,data,dictionary} = this.props.infoData
    let dataPack = "";
    

    if(this.props.infoData.key === 'contact'){
       dataPack = new DataPack(key,"Contacts",data,dictionary);  
    }
    else{
       dataPack = new DataPack(key,"Companies",data,dictionary);
    }

    return (
      <div className="InfoPage">
        <BasicInfo 
          dataPack = {dataPack}    
          navItems={navItems}
          modalKey={currentModal.key}
          onNavItemClick={this.onNavItemClick}
        />

        <DetailInfo 
          dataPack = {dataPack}  
          dictionary = {dictionary}
          expandPack = {this.props.expandPack}/>
      </div>
    );
  }
}

export default InfoPage;

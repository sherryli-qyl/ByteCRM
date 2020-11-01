import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Modal from '../../Modal';
import InfoPage from '../../InfoPage';
import Activities from '../../Activities';
import SideBar from '../../SideBar';
import Loading from '../../Loading';
import store from '../../../store';
import { addContactAction } from '../../../action';
import AssociatedCompany from './components/AssociatedCompany';
import Deals from '../../Deals';
import { ModalContext } from '../../Modal/components/ModalContext';
import { InfoContext } from '../../InfoPage/components/Context';
import { publicTheme } from '../../Style/Theme/MatUITheme';
import { ContactDictionary } from './components/Dictionary';
import { GetContact, UpdateContact } from '../../Api/Contact/Contact';
import WebActivity from './components/WebActivity';
import './ContactMain.scss';

class ContactMain extends Component {
  constructor(props) {
    super(props);
    const expandPack = [{ key: 'About this Contact', content: '' }, { key: 'Website Activity', content: (<WebActivity />) }];
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      Xaxis: 300,
      Yaxis: 50,
      visible: false,
      contact: '',
      user,
      expandPack,
      currentModal: '',
      loading: true,
      theme: publicTheme,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onChangeSingleInfo = this.onChangeSingleInfo.bind(this);
    this.onChangeMultiInfo = this.onChangeMultiInfo.bind(this);
  }

  openModal(selectedModal) {
    if (selectedModal.key === this.state.currentModal.key) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: true,
        currentModal: selectedModal,
      });
    }
  }

  closeModal() {
    this.setState({
      visible: false,
      currentModal: '',
    });
  }

  onChangeSingleInfo(key, value) {
    const newContact = this.state.contact;
    newContact[key] = value;
    if (key && value) {
      this.setState({
        contact: newContact,
      });
    }
    UpdateContact(this.state.contact.id, newContact);
  }

  onChangeMultiInfo(data) {
    const newContact = data;
    this.setState({
      contact: newContact,
    });
    UpdateContact(this.state.contact.id, newContact);
    console.table(newContact);
  }

  componentDidMount() {
    const selectedContactId = sessionStorage.getItem('id');
    const contact = GetContact(selectedContactId);
    contact.then((value) => {
      this.setState({
        contact: value,
        loading: false,
      });
      const action = addContactAction(value);
      store.dispatch(action);
      sessionStorage.setItem('contact', JSON.stringify(value));
    })
      .catch((error) => {
        console.log(error.message);
        alert('Please Check your Internet');
      });
  }

  render() {
    const {
      visible, currentModal, contact, theme, expandPack, loading,
    } = this.state;
    const infoData = { key: 'contact', data: contact, dictionary: ContactDictionary };
    const onChangeInfoHandlers = { single: this.onChangeSingleInfo, multi: this.onChangeMultiInfo };
    const sideBarItems = [
      { key: 'Company', component: <AssociatedCompany contact={contact} company={contact.company} /> },
      { key: 'Deals', component: <Deals contact={contact} company={contact.company} /> },
    ];
    const modalController = { open: this.openModal, close: this.closeModal, contact };

    return (
      <div>
        <ModalContext.Provider value={modalController}>
          <ThemeProvider theme={theme}>
            {loading
              ? <Loading variant="full page" />
              : (
                <div className="Main">
                  <InfoContext.Provider value={onChangeInfoHandlers}>
                    <InfoPage
                      openModal={this.openModal}
                      infoData={infoData}
                      expandPack={expandPack}
                    />
                  </InfoContext.Provider>
                  <Activities
                    contact={contact}
                    relatedTo={contact.id}
                  />
                  <SideBar sideBarItems={sideBarItems} />
                  {currentModal
                    ? (
                      <Modal
                        Xaxis={this.state.Xaxis}
                        Yaxis={this.state.Yaxis}
                        modalController={modalController}
                        visible={visible}
                        currentModal={currentModal}
                        closeModal={this.closeModal}
                      />
                    )
                    : ''}
                </div>
              )}
          </ThemeProvider>
        </ModalContext.Provider>
      </div>
    );
  }
}

export default ContactMain;

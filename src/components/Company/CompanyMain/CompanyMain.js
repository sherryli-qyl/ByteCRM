import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Modal from '../../Modal';
import { InfoContext } from '../../InfoPage/components/Context';
import { ModalContext } from '../../Modal/components/ModalContext';
import InfoPage from '../../InfoPage';
import Activities from '../../Activities';
import SideBar from '../../SideBar';
import AssociatedContacts from './components/AssociatedContacts';
import { publicTheme } from '../../Style/Theme/MatUITheme';
import { CompanyDictionary } from './components/Dictionary';
import { GetCompanyByCode, UpdateCompany } from '../../Api/Company';
import Loading from '../../Loading';
import './CompanyMain.scss';

class CompanyMain extends Component {
  constructor(props) {
    const expandPack = [{ key: 'About this Company', content: '' }];
    super(props);
    this.code = 'CM09';
    this.userId = '5f80b49ae7f8960972681ac5';
    this.state = {
      Xaxis: 300,
      Yaxis: 50,
      visible: false,
      code: this.code,
      company: {},
      expandPack,
      currentModal: '',
      theme: publicTheme,
      loading: true,
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
    const newCompany = this.state.company;
    newCompany[key] = value;
    this.setState({
      company: newCompany,
    });
  }

  onChangeMultiInfo(data) {
    const newCompany = data;
    const response = UpdateCompany(this.state.company.id, data);
    response.then((response) => {
      if (response.statusText === 'OK') {
        this.setState({
          company: newCompany,
        });
      } else {
        console.log('update company failed');
      }
    });
  }

  componentDidMount() {
    const selectedCompanyId = sessionStorage.getItem('id');
    const data = GetCompanyByCode(selectedCompanyId);
    data.then((response) => {
      if (response.statusText === 'OK') {
        const company = response.data;
        this.setState({
          company,
          loading: false,
          associatedContacts: company.associatedContacts,
        });
        sessionStorage.setItem('company', JSON.stringify(company));
      } else if (response.status === 404) {
        alert('comapny is not found');
      }
    });
  }

  render() {
    const {
      visible, currentModal, company, associatedContacts, expandPack, theme, loading,
    } = this.state;
    const value = { single: this.onChangeSingleInfo, multi: this.onChangeMultiInfo };
    const infoData = { key: 'company', data: company, dictionary: CompanyDictionary };
    const sideBarItems = [
      { key: 'Contacts', component: <AssociatedContacts contactList={associatedContacts} company={company} /> },
    ];
    const modalController = { open: this.openModal, close: this.closeModal };

    return (
      <div>
        <ModalContext.Provider value={modalController}>
          <ThemeProvider theme={theme}>
            {loading
              ? <Loading variant="full page" />
              : (
                <div className="Main">
                  <InfoContext.Provider value={value}>
                    <InfoPage
                      openModal={this.openModal}
                      infoData={infoData}
                      expandPack={expandPack}
                    />
                  </InfoContext.Provider>
                  <Activities
                    associatedContacts={associatedContacts}
                    relatedTo={company.id}
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

export default CompanyMain;

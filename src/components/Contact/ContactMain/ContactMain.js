import React, { Component } from 'react';
import Modal from '../../Modal';
import InfoPage from '../../InfoPage';
import Activities from '../../Activities';
import RelationCompany from "./components/RelationCompany";
import Loading from '../../Loading';
import { ThemeProvider } from '@material-ui/core/styles';
import { ModalContext } from '../../Modal/components/ModalContext';
import { InfoContext } from '../../InfoPage/components/Context';
import { publicTheme } from '../../Style/Theme/MatUITheme';
import { ContactDictionary } from './components/Dictionary';
import { ActivityContext } from '../../Activities/Context';
import { GetContact, UpdateContact } from '../../Api/Contact/Contact';
import WebActivity from './components/WebActivity';
import './ContactMain.scss';


class ContactMain extends Component {

    constructor(props) {
        super(props);
        this.id = "5f7c1fa07ed22f05ec4ec31a";
        this.userId = "5f80b49ae7f8960972681ac5";
        const expandPack = [{ key: 'About this Contact', content: "" }, { key: 'Website Activity', content: (<WebActivity />) }]
        this.state = {
            Xaxis: 300,
            Yaxis: 50,
            visible: false,
            contact: '',
            expandPack: expandPack,
            currentModal: "",
            loading: true,
            theme: publicTheme,
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.onChangeSingleInfo = this.onChangeSingleInfo.bind(this);
        this.onChangeMultiInfo = this.onChangeMultiInfo.bind(this);
    }

    openModal(selectedModal) {
        console.table(selectedModal);
        if (selectedModal.key === this.state.currentModal.key) {
            this.setState({
                visible: true,
            });
        }
        else {
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
        let newContact = this.state.contact;
        newContact[key] = value;
        if (key && value) {
            this.setState({
                contact: newContact
            })
        }
    }

    onChangeMultiInfo(data) {
        let newContact = data;
        this.setState({
            contact: newContact
        })
        UpdateContact(this.id, newContact)
        console.table(newContact);
    }



    componentDidMount() {
        const selectedContactId = sessionStorage.getItem('id');
        const contact = GetContact(selectedContactId);
        contact.then(value =>
            this.setState({
                contact: value,
                loading: false,
            })
        ).catch(error =>{
            console.log(error.message);
            alert("Please Check your Internet");
        })
    }



    render() {
        const { visible, currentModal, contact, theme, expandPack, loading } = this.state;
        const infoData = { key: 'contact', data: contact, dictionary: ContactDictionary };
        const value = { single: this.onChangeSingleInfo, multi: this.onChangeMultiInfo };
        const contactData = {contact:contact,userId:this.userId,close:this.closeModal}
        const openModal = this.openModal;
        return (
            <div>
                <ModalContext.Provider value={openModal}>
                    <ThemeProvider theme={theme}>
                        {loading ?
                            <Loading variant="full page" />
                            :
                            <div className="Main">
                                <InfoContext.Provider value={value}>
                                    <InfoPage 
                                        openModal={this.openModal}
                                        infoData={infoData}
                                        expandPack={expandPack}
                                    />
                                </InfoContext.Provider>
                                <ActivityContext.Provider value = {contactData}>
                                    <Activities contact = {contact}
                                                />
                                    <RelationCompany company={contact.company}/>
                                    <Modal Xaxis={this.state.Xaxis}
                                        Yaxis={this.state.Yaxis}
                                        visible={visible}
                                        currentModal={currentModal}
                                        closeModal={this.closeModal} />
                                </ActivityContext.Provider>
                            </div>
                        }
                    </ThemeProvider>
                </ModalContext.Provider>
            </div>

        )
    }
}

export default ContactMain;
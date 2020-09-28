import React, { Component } from 'react';
import Modal from '../../Modal';
import InfoPage from '../../InfoPage';
import Activities from '../../Activities';
import Navbar from "../../Navbar";
import RelationPage from "../../RelationPage";
import { ThemeProvider } from '@material-ui/core/styles';
import { ModalContext } from '../../Modal/components/ModalContext';
import { InfoContext } from '../../InfoPage/components/Context';
import { publicTheme } from '../../Style/Theme/MatUITheme';
import { ContactDictionary } from './components/Dictionary';
import WebActivity from './components/WebActivity';
import './ContactMain.scss';


class ContactMain extends Component {

    constructor(props) {
        super(props);
        const testContact = {
            _id: '000001', firstName: 'John', lastName: 'Doe', jobTitle: 'CEO', phoneNo: '12345', email: '123@gmail.com',
            contactOwner: "Yurun YU", company: "Nike Ltd", lifeCycle: 'Customer'
        }
        const expandPack = [{ key: 'About this Contact', content: "" }, { key: 'Website Activity', content: (<WebActivity />) }]
        this.state = {
            Xaxis: 300,
            Yaxis: 50,
            visible: false,
            contact: testContact,
            expandPack: expandPack,
            currentModal: "",
            theme: publicTheme,
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.testContext = this.testContext.bind(this);
        this.onChangeSingleInfo = this.onChangeSingleInfo.bind(this);
        this.onChangeMultiInfo = this.onChangeMultiInfo.bind(this);
    }

    openModal(selectedModal) {
        this.setState({
            visible: true,
            currentModal: selectedModal,
        });
        console.log("open the modal " + this.state.visible)
    }

    testContext() {
        console.log('receive context');
    }

    closeModal() {
        this.setState({
            visible: false,
        });
        console.log("close the modal " + this.state.visible)
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
    }

    render() {
        const { visible, currentModal, contact, theme, expandPack } = this.state;
        const infoData = { key: 'contact', data: contact, dictionary: ContactDictionary };
        const value = { single: this.onChangeSingleInfo, multi: this.onChangeMultiInfo };
        return (
            <div>
                <ModalContext.Provider value={this.openModal}>
                    <header>
                        <Navbar />
                    </header>
                    <ThemeProvider theme={theme}>
                        <div className="Main">
                            <InfoContext.Provider value={value}>
                                <InfoPage openModal={this.openModal}
                                    infoData={infoData}
                                    expandPack={expandPack}
                                />
                            </InfoContext.Provider>
                            <Activities />
                            <RelationPage />
                            <Modal Xaxis={this.state.Xaxis}
                                Yaxis={this.state.Yaxis}
                                visible={visible}
                                currentModal={currentModal}
                                closeModal={this.closeModal}
                            />
                        </div>
                    </ThemeProvider>
                </ModalContext.Provider>
            </div>

        )
    }
}

export default ContactMain;
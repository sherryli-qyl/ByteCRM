import React, { Component } from 'react';
import Modal from '../../Modal';
import InfoPage from '../../InfoPage';
import Activities from '../../Activities';
import Navbar from "../../Navbar";
import { ThemeProvider } from '@material-ui/core/styles';
import { ModalContext } from '../../Modal/components/ModalContext';
import { ContactContext } from '../ContactContext';
import { checkbox } from '../../Style/Theme/MatUITheme';
import WebActivity from './components/WebActivity';
import './ContactMain.scss';


class ContactMain extends Component {

    constructor(props) {
        super(props);
        const testContact = {
            ID: '000001', FirstName: 'John', LastName: 'Doe', JobTitle: 'CEO', PhoneNo: '12345', Email: '123@gmail.com',
            ContactOwner: "Yurun YU",Company:"Nike Ltd",LifeCycle:'Customer'
        }
        this.state = {
            Xaxis: 300,
            Yaxis: 50,
            visible: false,
            contact: testContact,
            currentModal: "",
            theme: checkbox
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.testContext = this.testContext.bind(this);
        this.onChangeContactInfo = this.onChangeContactInfo.bind(this);
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

    onChangeContactInfo(key,value){
        console.log("parent key " + key);
        console.log("parent value " + value);
        let newContact = this.state.contact;
        newContact[key] = value;
        this.setState({
            contact: newContact
        })
    }

    render() {
        const { visible, currentModal, contact, theme } = this.state
        const expandPack = [{key:'Website Activity',content: (<WebActivity/>)}]
        return (
            <div>
                <ModalContext.Provider value={this.openModal}>
                    <header>
                        <Navbar />
                    </header>
                    <ThemeProvider theme={theme}>
                        <div className="Main">
                            <ContactContext.Provider value={this.onChangeContactInfo}>
                                <InfoPage openModal={this.openModal}
                                          contact = {contact}
                                          expandPack = {expandPack}
                                />
                            </ContactContext.Provider>
                            <Activities />
                            <div className="Company">
                                <p>Company component</p>
                            </div>
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
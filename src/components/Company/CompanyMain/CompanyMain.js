import React, { Component } from 'react';
import Modal from '../../Modal';
import { InfoContext } from '../../InfoPage/components/Context';
import { ModalContext } from '../../Modal/components/ModalContext';
import InfoPage from '../../InfoPage';
import Activities from '../../Activities';
import RelationPage from '../../RelationPage';
import { ThemeProvider } from '@material-ui/core/styles';
import { publicTheme } from '../../Style/Theme/MatUITheme';
import { CompanyDictionary } from './components/Dictionary';
import './CompanyMain.scss';

class CompanyMain extends Component {
    constructor(props) {
        const testCompany = {
            Name: 'Nike', CompanyDomainName: 'Nike.Ltd', Industry: 'IT', PhoneNumber: '123123',
            CompanyOwner: 'John Doe', Type: 'Partner', City: 'Sydney'
        }
        const expandPack = [{ key: 'About this Company', content: "" }]
        super(props);
        this.state = {
            Xaxis: 300,
            Yaxis: 50,
            visible: false,
            company: testCompany,
            expandPack,
            currentModal: "",
            theme: publicTheme,
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.onChangeInfo = this.onChangeInfo.bind(this);
    }

    openModal(selectedModal) {
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
            currentModal: ''
        });
    }

    onChangeInfo(key, value) {
        let newCompany = this.state.company;
        newCompany[key] = value;
        this.setState({
            company: newCompany
        })
    }

    render() {
        const { visible, currentModal, company, expandPack, theme } = this.state
        const infoData = { key: 'company', data: company, dictionary: CompanyDictionary };
        return (
            <div>
                <ModalContext.Provider value={this.openModal}>
                    <ThemeProvider theme={theme}>
                        <div className="Main">
                            <InfoContext.Provider value={this.onChangeInfo}>
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


export default CompanyMain;
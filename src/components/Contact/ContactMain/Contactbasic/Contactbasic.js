import React, { Component } from 'react';
import "./Contactbasic.scss";
import IconNote from "../../../../img/Contact/note.png";
import IconMail from "../../../../img/Contact/mail.png";
import IconCall from "../../../../img/Contact/call.png";
import IconLog from "../../../../img/Contact/log.png";
import IconTask from "../../../../img/Contact/task.png";
import IconMeeting from "../../../../img/Contact/meeting.png";
import ContactHeader from "./components/ContactHeader"
import ActivityBar from "./components/ActivityBar/ActivityBar"
import NoteModal from "../../../Modal/components/Function/Note_Modal"
import EmailModal from "../../../Modal/components/Function/Email_Modal"



class Contactbasic extends Component {
    constructor(props) {
        super(props);
        const navItems = [
            { key: 'Note', value: 'Note', src: IconNote, modal: (<NoteModal />) },
            { key: 'Email', value: 'Email', src: IconMail, modal: (<EmailModal />) },
            { key: 'Call', value: 'Call', src: IconCall, modal: "" },
            { key: 'Log', value: 'Log', src: IconLog, modal: "" },
            { key: 'Task', value: 'Task', src: IconTask, modal: "" },
            { key: 'Meeting', value: 'Meeting', src: IconMeeting, modal: "" },
        ];
        this.state = {
            navItems,
            currentModal: navItems[0],
            name: "email",
        }
        this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    onNavItemClick(selectedModal) {
        console.log("Switch to the " + selectedModal.key)
        this.setState({
            currentModal: selectedModal,
        })
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
                <div className="about_contact">
                    <h3> About this contact</h3>
                    <div className="firstname_box">
                        <div className="key_name"> First name </div>
                        <div className="value_name"> Brian </div>
                    </div>
                    <div className="lastname_box">
                        <div className="key_name"> Last name </div>
                        <div className="value_name"> Halligan </div>
                    </div>
                    <div className="email_box">
                        <div className="key_name"> Email </div>
                        <div className="value_name"> bh@hubspot.com </div>
                    </div>
                    <div className="phone-number_box">
                        <div className="key_name"> Phone number </div>
                        <div className="value_name">  blank </div>
                    </div>
                    <div className="contact-number_box">
                        <div className="key_name"> Contact owner </div>
                        <div className="value_name">  blank </div>
                    </div>
                    <div className="lifecycles-tage_box">
                        <div className="key_name"> Lifecycle stage </div>
                        <div className="value_name">  Lead </div>
                    </div>
                    <div className="lead-status_box">
                        <div className="key_name"> Lead status </div>
                        <div className="value_name">  blank </div>
                    </div>
                    <div className="message_box">
                        <div className="key_name"> Message </div>
                        <div className="value_name">  blank </div>
                    </div>
                    <div className="company-name_box">
                        <div className="key_name"> Company name </div>
                        <div className="value_name">  blank </div>
                    </div>
                    <button className="view-all-properties">View all properties </button>
                    <button className="view-property-history">View property history </button>
                </div>
                <div className="website_activity">
                    <h3> Website activity</h3>
                    <p> Website activity shows you how many times a contact has visited your site and viewed your pages. </p>
                </div>

            </div>

        )
    }
}

export default Contactbasic;
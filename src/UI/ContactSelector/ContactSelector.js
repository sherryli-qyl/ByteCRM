import React from 'react';
import Dropdown from './components/Dropdown';
import './ContactSelector.scss';



class ContactSelector extends React.Component {
    constructor(props) {
        super(props);
        this.testList = [{ _id: "00001", firstName: "Oliver", lastName: "Yu", email: '223@gmail.com' },
        { _id: "5f7709da190582d02ea1bd3c", firstName: "Jane", lastName: "Wick", email: 'abc@gmail.com' }]
        this.state = {
            showDropdown: false,
            contactList: this.testList,
        }
        this.onClickButton = this.onClickButton.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleRemoveContact = this.handleRemoveContact.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    onClickButton() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown
        })
        )
    }

    onClose() {
        this.setState(prevState => ({
            showDropdown: false,
        })
        )
    }

    handleRemoveContact(id) {
        let newList = this.state.contactList
        for (let i in newList) {
            if (newList[i]._id === id) {
                newList.splice(i, 1);
            }
            this.setState({
                contactList: newList
            })
        }
        console.table(this.state.contactList[0]);
    }

    handleAddContact(contact) {
        let newList = this.state.contactList;
         newList.push(contact);
        this.setState({
            contactList: newList
        })
        console.table(this.state.contactList[0]);
    }

    render() {
        const { showDropdown, contactList } = this.state;
        let contacted = ""
        if (contactList.length === 1) {
            contacted = `${contactList[0].firstName} ${contactList[0].lastName}`
        }
        else contacted = `${contactList.length} contacts`
        return (
            <div className='contactSelector'>
                <div className='contactSelector__label'>
                    <button className='contactSelector__label__btn'
                        onClick={(event) => {
                            event.stopPropagation();
                            this.onClickButton();
                        }}>
                        {contacted}
                    </button>
                </div>
                <Dropdown showDropdown={showDropdown}
                          handleRemoveContact={this.handleRemoveContact}
                          handleAddContact = {this.handleAddContact}
                          contactList = {contactList} />
            </div>
        )
    }
}

export default ContactSelector;
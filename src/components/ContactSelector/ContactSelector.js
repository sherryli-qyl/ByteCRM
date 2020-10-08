import React from 'react';
import Dropdown from './components/Dropdown';
import { ActivityContext } from '../Activities/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import SearchBar from './components/SearchBar';
import './ContactSelector.scss';



class ContactSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            contactList: this.props.contactList,
            textInput: '123',
            enableCleanBtn: false,
        }
        this.handleClickSelectorButton = this.handleClickSelectorButton.bind(this);
        this.handleRemoveContact = this.handleRemoveContact.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.wrapperRef = React.createRef();
        this.btnRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickSelectorButton() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown,
        })
        );
        this.handleCleanInput();
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
        this.props.handleDeleteContact(id);
    }

    handleAddContact(contact) {
        let newList = this.state.contactList;
        newList.push(contact);
        this.setState({
            contactList: newList
        })
        this.props.handleAddContact(contact._id);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) &&!this.btnRef.current.contains(event.target)&& this.state.showDropdown) {
            this.handleClickSelectorButton();
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }



    render() {
        const { showDropdown, contactList} = this.state;
        let contacted = ""
        if (contactList.length === 1) {
            contacted = `${contactList[0].firstName} ${contactList[0].lastName}`
        }
        else contacted = `${contactList.length} contacts`
        return (
            <div className='contactSelector'>
                <div className='contactSelector__label' ref ={this.btnRef}>
                    <button className='contactSelector__label__btn'
                        onClick={(event) => {
                            event.stopPropagation();
                            this.handleClickSelectorButton();
                        }}>
                        {contacted}
                        <FontAwesomeIcon className='contactSelector__label__btn__icon' icon={faCaretDown} />
                    </button>
                </div>
                <div className='drowpdown__wrapper' ref={this.wrapperRef}>
                    <ActivityContext.Consumer>
                        {contactInfo => (
                            <Dropdown
                                showDropdown={showDropdown}
                                userId={contactInfo.userId}
                                contact={contactInfo.contact}
                                handleCleanInput={click => this.handleCleanInput = click}
                                handleRemoveContact={this.handleRemoveContact}
                                handleAddContact={this.handleAddContact}
                                contactList={contactList} />
                        )
                        }
                    </ActivityContext.Consumer>
                </div>
            </div>
        )
    }
}

export default ContactSelector;
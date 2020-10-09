import React from 'react';
import Dropdown from './components/Dropdown';
import { ActivityContext } from '../Activities/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { SearchContactLocal, SearchContactRemote } from '../../utils/SearchContact/SearchContact';
import { GetContactByUserId } from '../Api/Contact';
import './ContactSelector.scss';



class ContactSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            contactList: this.props.contactList,
            userId: this.props.userId,
            contact: this.props.contact,
            textInput: '',
            enableCleanBtn: false,
            checkInput: false,
            hintMessage: '',
            loading: false,
            searchList: [],
        }
        this.handleClickSelectorButton = this.handleClickSelectorButton.bind(this);
        this.handleRemoveContact = this.handleRemoveContact.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.handleCleanInput = this.handleCleanInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleCleanInput() {
        this.setState({
            textInput: '',
        })
        this.handleFindContact("");
    }

    handleInputChange(inputText) {
        let activeBtn = false
        if (inputText.length > 0) {
            activeBtn = true;
        }
        this.setState({
            textInput: inputText,
            enableCleanBtn: activeBtn
        })
        this.handleFindContact(inputText);
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

    handleFindContact(text) {
        let newHint = '';
        let newList = SearchContactLocal(this.state.contactList, text.toUpperCase());

        if (text.length === 0) {
            this.setState({
                searchList: [],
                checkInput: false,
            })
        }

        else if (newList.length > 0 && text.length !== 0) {
            this.setState({
                searchList: newList,
                checkInput: false,
            })
        }

        else if (text.length > 0 && text.length < 3 && newList.length === 0) {
            newHint = `type ${3 - text.length} more character`;
            this.setState(prevState => {
                return {
                    ...prevState,
                    hintMessage: newHint,
                    checkInput: true,
                    searchList: newList,
                }
            })
        }

        if (text.length >= 3) {
            newHint = 'searching';
            const newList = SearchContactLocal(this.state.contactList, text.toUpperCase());
            const response = GetContactByUserId(this.props.userId, text.toUpperCase())
            this.setState(prevState => ({
                ...prevState,
                loading: true
            }))
            response.then(findContacts => {
                if (findContacts) {
                    const newSearchList = SearchContactRemote(newList, text.toUpperCase(), findContacts);
                    let foundNewContact = false;
                    if (newSearchList.length >= 1) {
                        foundNewContact = true;
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                checkInput: !foundNewContact,
                                searchList: newSearchList,
                                hintMessage: newHint,
                                loading: false,
                            }
                        });
                    }
                }
                else {
                    this.setState(prevState => {
                        return {
                            ...prevState,
                            loading: false,
                            checkInput: true,
                            hintMessage: 'No result found'
                        }
                    }
                    )
                }
            }
            )
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && !this.btnRef.current.contains(event.target) && this.state.showDropdown) {
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
        const { showDropdown, contactList, textInput, enableCleanBtn,
            hintMessage, checkInput, searchList, loading, contact } = this.state;
        console.log("send1 " + textInput);
        let contacted = ""

        if (!contactList) {
            contacted = `0 contacts`
        }
        else if (contactList.length === 1) {
            contacted = `${contactList[0].firstName} ${contactList[0].lastName}`
        }
        else contacted = `${contactList.length} contacts`

        return (
            <div className='contactSelector'>
                <div className='contactSelector__label' ref={this.btnRef}>
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
                    <Dropdown
                        hintMessage={hintMessage}
                        checkInput={checkInput}
                        searchList={searchList}
                        loading={loading}
                        showDropdown={showDropdown}
                        contact={contact}
                        textInput={textInput}
                        enableCleanBtn={enableCleanBtn}
                        handleCleanInput={this.handleCleanInput}
                        handleInputChange={this.handleInputChange}
                        handleRemoveContact={this.handleRemoveContact}
                        handleAddContact={this.handleAddContact}
                        contactList={contactList} />
                        )
                </div>
            </div>
        )
    }
}

export default ContactSelector;
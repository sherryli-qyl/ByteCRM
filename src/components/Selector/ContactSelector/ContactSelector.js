import React from 'react';
import Dropdown from '../components/Dropdown';
import Select from '../components/Select';
import DropDownDisplay from '../../DropDownDisplay';
import NameTag from '../../NameTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FormatList,SearchSelectsLocal,SearchSelectsRemote,ItemSelected} from '../../../lib/Search';
import { GetContactByUserId } from '../../Api/Contact';
import './ContactSelector.scss';


class ContactSelector extends React.Component {
    constructor(props) {
        super(props);
        const { contactList, userId, contact, variant } = this.props;
        this.state = {
            showDropdown: false,
            contactList,
            userId,
            contact,
            variant,
            textInput: '',
            enableCleanBtn: false,
            checkInput: false,
            textInputHint: '',
            loading: false,
            searchList: [],
        }
        this.wrapperRef = React.createRef();
        this.btnRef = React.createRef();
        this.handleClickSelectorButton = this.handleClickSelectorButton.bind(this);
        this.handleRemoveContact = this.handleRemoveContact.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.handleCleanInput = this.handleCleanInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        let newList = [...this.state.contactList];
        let newSearchList = ItemSelected(this.state.searchList, id, false);
        
        if (newList.length <= 1 && this.state.variant === "activity") {
            console.log("card must have at least one contact");
            return;
        }
        else {
            for (let i in newList) {
                if (newList[i]._id === id) {
                    newList.splice(i, 1);
                }
                if(this.state.variant === "activity"){
                    this.props.handleDeleteContact(id);
                    this.setState({
                        contactList: newList,
                        searchList: newSearchList
                    })
                }
                else{
                    this.setState({
                        contactList: newList,
                    })
                    this.props.handleSelectedContacts(newList);
                }      
            }    
        }
    }

    handleAddContact(contact) {
        let newContactList = this.state.contactList;
        let newSearchList = ItemSelected(this.state.searchList, contact.id, true);
        newContactList.push(contact);

        if(this.state.variant === "activity"){
            this.props.handleAddContact(contact._id);
            this.setState({
                contactList: newContactList,
                searchList: newSearchList
            })
        }
        else{
            this.props.handleSelectedContacts(newContactList);
        }
    }

    handleFindContact(text) {
        let newHint = '';
        let newList = SearchSelectsLocal(this.state.contactList, text.toUpperCase());

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
                    textInputHint: newHint,
                    checkInput: true,
                    searchList: newList,
                }
            })
        }

        if (text.length >= 3) {
            newHint = 'searching';
            const newList = SearchSelectsLocal(this.state.contactList, text.toUpperCase());
            const response = GetContactByUserId(JSON.parse(localStorage.getItem('user')).id, text.toUpperCase())
            this.setState(prevState => ({
                ...prevState,
                loading: true
            }))
            response.then(response => {
                if (response) {
                    const newSearchList = SearchSelectsRemote(newList, text.toUpperCase(), response.data);
                    let foundNewContact = false;
                    if (newSearchList.length >= 1) {
                        foundNewContact = true;
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                checkInput: !foundNewContact,
                                searchList: newSearchList,
                                textInputHint: newHint,
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
                            textInputHint: 'No result found'
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
        const { showDropdown, textInput, enableCleanBtn,
            textInputHint, checkInput, searchList, loading, contact, variant } = this.state;

        let contacted = "";
        let contactList = [];
        this.state.contactList ? contactList = FormatList(this.state.contactList) : contacted = `0 contacts`;

        let corner = "disable";
        let dropDownClassName = "contactSelector__dropDown ";
        let label = "Contacts";
        let checkOneContact = false;

        if (variant === "activity") {
            corner = "topLeft";
            dropDownClassName += "contactSelector__dropDown--activity";
            checkOneContact = true;
        }
        else {
            dropDownClassName += "contactSelector__dropDown--sideBar";
            label = "Results";
        }


        if (contactList.length === 1) {
            contacted = `${contactList[0].contact.fullName}`;
        }
        else contacted = `${contactList.length} contacts`;

        const select = 
        <Select
            label={label}
            checkOneContact= {checkOneContact}
            selectList={contactList}
            searchList={searchList}
            selectHint={this.props.contactSelectHint}
            handleRemoveContact={this.handleRemoveContact}
            handleAddContact={this.handleAddContact} />;

        
        return (
            <div className='contactSelector'>
                {variant === "activity" ?
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
                    :
                    <div className='contactSelector__displayBar' ref={this.btnRef}>
                        <DropDownDisplay
                            onClick={this.handleClickSelectorButton}>
                            {this.state.contactList ?
                                this.state.contactList.map((item) => (
                                    <NameTag key = {item.id}  
                                             onClick = {()=>this.handleRemoveContact(item.id)}
                                             disable={false}>
                                        {item.fullName}
                                    </NameTag>
                                ))
                                :
                                " Search Companies"
                            }
                        </DropDownDisplay>
                    </div>
                }
                <div className={dropDownClassName} ref={this.wrapperRef}>
                    <Dropdown
                        textInputHint={textInputHint}
                        checkInput={checkInput}
                        loading={loading}
                        showDropdown={showDropdown}
                        contact={contact}
                        textInput={textInput}
                        enableCleanBtn={enableCleanBtn}
                        select={select}
                        corner={corner}
                        placeholder={"Search all records"}
                        handleCleanInput={this.handleCleanInput}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}

export default ContactSelector;
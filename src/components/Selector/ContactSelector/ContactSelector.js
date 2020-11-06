import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../components/Dropdown';
import Select from '../components/Select';
import DropDownDisplay from '../../DropDownDisplay';
import NameTag from '../../NameTag';
import withSearch from '../components/withSearch';
import { FormatList } from '../../../lib/Search';
import { GetContactByUserId } from '../../Api/Contact';
import './ContactSelector.scss';

class ContactSelector extends React.Component {
  constructor(props) {
    super(props);
    const { contactList, contact, variant } = this.props;
    this.state = {
      showDropdown: false,
      contactList,
      contact,
      variant,
      textInput: '',
      enableCleanBtn: false,
    };
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
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
    this.handleCleanInput();
  }

  handleCleanInput() {
    this.setState({
      textInput: '',
    });
    this.props.search('');
  }

  handleInputChange(inputText) {
    let activeBtn = false;
    if (inputText.length > 0) {
      activeBtn = true;
    }
    this.setState({
      textInput: inputText,
      enableCleanBtn: activeBtn,
    });
    this.props.search(inputText, this.state.contactList, GetContactByUserId);
  }

  handleAddContact(contact) {
    const newContactList = this.state.contactList;
    newContactList.push(contact);
    if (this.state.variant === 'activity') {
      this.props.handleAddContact(contact._id);
      this.props.handleSelect(contact._id);
      this.setState({
        contactList: newContactList,
      });
    } else {
      this.props.handleSelectedContacts(newContactList);
    }
  }

  handleRemoveContact(id) {
    const newList = [...this.state.contactList];
    if (newList.length <= 1 && this.state.variant === 'activity') {
      console.log('card must have at least one contact');
    } else {
      for (const i in newList) {
        if (newList[i]._id === id) {
          newList.splice(i, 1);
        }
        if (this.state.variant === 'activity') {
          this.props.handleDeleteContact(id);
          this.props.handleRemove(id);
          this.setState({
            contactList: newList,
          });
        } else {
          this.setState({
            contactList: newList,
          });
          this.props.handleSelectedContacts(newList);
        }
      }
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
    const {
      showDropdown, textInput, enableCleanBtn, contact, variant,
    } = this.state;
    const {
      textInputHint, searchList, loading, checkInput,
    } = this.props;

    let contacted = '';
    let contactList = [];
    this.state.contactList ? contactList = FormatList(this.state.contactList) : contacted = '0 contacts';

    let corner = 'disable';
    let dropDownClassName = 'contactSelector__dropDown ';
    let label = 'Contacts';
    let checkOneContact = false;

    if (variant === 'activity') {
      corner = 'topLeft';
      dropDownClassName += 'contactSelector__dropDown--activity';
      checkOneContact = true;
    } else {
      dropDownClassName += 'contactSelector__dropDown--sideBar';
      label = 'Results';
    }

    if (contactList.length === 1) {
      contacted = `${contactList[0].selects.fullName}`;
    } else contacted = `${contactList.length} contacts`;

    const select = (
      <Select
        label={label}
        checkOneContact={checkOneContact}
        selectList={contactList}
        searchList={searchList}
        selectHint={this.props.contactSelectHint}
        handleRemoveSelects={this.handleRemoveContact}
        handleAddSelects={this.handleAddContact}
      />
    );

    return (
      <div className="contactSelector">
        {variant === 'activity' ? (
          <div className="contactSelector__label" ref={this.btnRef}>
            <button
              className="contactSelector__label__btn"
              onClick={(event) => {
                event.stopPropagation();
                this.handleClickSelectorButton();
              }}
            >
              {contacted}
              <FontAwesomeIcon className="contactSelector__label__btn__icon" icon={faCaretDown} />
            </button>
          </div>
        )
          : (
            <div className="contactSelector__displayBar" ref={this.btnRef}>
              <DropDownDisplay
                onClick={this.handleClickSelectorButton}
              >
                {this.state.contactList
                  ? this.state.contactList.map((item) => (
                    <NameTag
                      key={item.id}
                      onClick={() => this.handleRemoveContact(item.id)}
                      disable={false}
                    >
                      {item.fullName}
                    </NameTag>
                  ))
                  : ' Search Companies'}
              </DropDownDisplay>
            </div>
          )}
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
            placeholder="Search all records"
            handleCleanInput={this.handleCleanInput}
            handleInputChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default withSearch(ContactSelector);

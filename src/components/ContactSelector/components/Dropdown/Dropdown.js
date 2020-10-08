import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import HintBar from '../HintBar';
import Loading from '../../../Loading';
import { SearchContactLocal, SearchContactRemote } from '../../../../utils/SearchContact/SearchContact';
import { GetContactByUserId } from '../../../Api/Contact';
import './Dropdown.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInput: false,
            hintMessage: '',
            loading: false,
            showDropdown: this.props.showDropdown,
            contactList: this.props.contactList,
            searchList: [],
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(text) {
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
            this.setState(prevState =>({
                ...prevState,
                loading:true
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
                            loading:false,
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




    render() {
        const { showDropdown } = this.props
        const { hintMessage, checkInput, contactList, searchList,loading} = this.state;
        let className = "dropdown "
        if (showDropdown) {
            className += "dropdown__active"
        }
        return (
            <div className={className}>
                <div className='dropdown__corner' />
                <div className='dropdown__inner'>
                    <div className='dropdown__inner__wrapper'>
                        <SearchBar onChange={this.onChangeInput}
                                   handleCleanInput = {this.props.handleCleanInput}/>
                    </div>
                    {!checkInput ?
                        <Select label={'Contacts'}
                            contact={this.props.contact}
                            searchList={searchList}
                            handleRemoveContact={this.props.handleRemoveContact}
                            handleAddContact={this.props.handleAddContact}
                            contactList={contactList} />
                        :
                        loading?
                        <Loading variant = "bar"/>
                        : 
                        <HintBar>
                            {hintMessage}
                        </HintBar>
                    }
                </div>
            </div>

        )
    }
}

export default Dropdown;
import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import HintBar from '../HintBar';
import { SearchContactLocal,SearchContactRemote} from '../../../../utils/SearchContact/SearchContact';
import './Dropdown.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInput: false,
            hintMessage: '',
            showDropdown: this.props.showDropdown,
            contactList: this.props.contactList,
            searchList:[],
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(text) {
        let newHint = '';
        let newList = SearchContactLocal(this.state.contactList, text.toUpperCase());

        if(text.length === 0) {
            this.setState({
                searchList: [],
                checkInput: false,
            })
        }

        else if (newList.length > 0 && text.length !==0) {
            this.setState({
                searchList:newList,
                checkInput:false,
            })
        }

        else if (text.length > 0 && text.length < 3 && newList.length === 0) {
            newHint = `type ${3 - text.length} more character`;
            this.setState(prevState => {
                return {
                    ...prevState,
                    hintMessage: newHint,
                    checkInput: true,
                    searchList:newList,
                }
            })
        }

        if (text.length >= 3) {
            newHint = 'searching';
            const newSearchList = SearchContactRemote(this.state.searchList,text.toUpperCase());
            let foundNewContact = false;
            
            if (newSearchList.length >= 1){
                foundNewContact = true;
            }
            this.setState(prevState => {
                return {
                    ...prevState,
                    checkInput: !foundNewContact,
                    searchList: newSearchList,
                    hintMessage: newHint,
                }
            });
        }
    }

   


    render() {
        const {showDropdown} = this.props
        const { hintMessage, checkInput, contactList,searchList} = this.state;
        let className = "dropdown "
        if (showDropdown) {
            className += "dropdown__active"
        }
        return (
            <div className={className}>
                <div className='dropdown__corner' />
                <div className='dropdown__inner'>
                    <div className='dropdown__inner__wrapper'>
                        <SearchBar onChange={this.onChangeInput} />
                    </div>
                    {!checkInput ?
                        <Select label={'Contacts'}
                            searchList = {searchList}
                            handleRemoveContact={this.props.handleRemoveContact}
                            handleAddContact={this.props.handleAddContact}
                            contactList={contactList} />
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
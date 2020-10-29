import React from 'react';
import Dropdown from '../components/Dropdown';
import Select from '../components/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FormatList,SearchSelectsLocal, SearchSelectsRemote,ItemSelected } from '../../../lib/Search';
import { SearchUser } from '../../Api/User';
import './UserSelector.scss';


const user = JSON.parse(localStorage.getItem('user'));

class UserSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            userList: this.props.userList,
            userId: user.id,
            user: user,
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
        this.handleRemoveUser = this.handleRemoveUser.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
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
        this.handleFindUser("");
    }

    handleInputChange(inputText) {
        let activeBtn = false;
        if (inputText.length > 0) {
            activeBtn = true;
        }
        this.setState({
            textInput: inputText,
            enableCleanBtn: activeBtn
        })
        this.handleFindUser(inputText);
    }

    handleRemoveUser(id) {
        let newList = this.state.userList;
        let newSearchList = ItemSelected(this.state.searchList,id,false);
        if (newList.length <= 1){     
            console.log("card must have at least one user");
            return;
        }
        else{
            for (let i in newList) {
                if (newList[i]._id === id) {
                    newList.splice(i, 1);
                }
                this.setState({
                    userList: newList,
                    searchList: newSearchList
                })
            }
            this.props.handleDeleteUser(id);
        }
    }

    handleAddUser(user) {
        let newUserList = this.state.userList;
        let newSearchList = ItemSelected(this.state.searchList,user.id,true);
        newUserList.push(user);

        this.setState({
            userList: newUserList,
            searchList:newSearchList
        })  
        this.props.handleAddUser(user._id);
    }

    handleFindUser(text) {
        let newHint = '';
        let newList = SearchSelectsLocal(this.state.userList, text.toUpperCase());

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
            const newList = SearchSelectsLocal(this.state.userList, text.toUpperCase());
            const response = SearchUser(this.state.userId,text);
            this.setState(prevState => ({
                ...prevState,
                loading: true
            }))
            response.then(findUsers => {
                if (findUsers) {
                    console.log(findUsers)
                    const newSearchList = SearchSelectsRemote(newList, text.toUpperCase(), findUsers.data);
                    let foundNewUser = false;
                    if (newSearchList.length >= 1) {
                        foundNewUser = true;
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                checkInput: !foundNewUser,
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
            textInputHint, checkInput, searchList, loading, user } = this.state;

        let assignedTo = ""
        const userList = FormatList(this.state.userList);

        if (!userList) {
            assignedTo = `0 user`
        }

        else if (userList.length === 1) {
            assignedTo = `${userList[0].user.firstName} ${userList[0].user.lastName} (${userList[0].user.email})`
        }

        const select = 
        <Select
            label={"Users"}
            checkOneContact= {true}
            selectList={userList}
            searchList={searchList}
            selectHint={this.props.contactSelectHint}
            handleRemoveContact={this.handleRemoveContact}
            handleAddContact={this.handleAddContact} />;
        
        return (
            <div className='userSelector'>
                <div className='userSelector__label' ref={this.btnRef}>
                    <button className='userSelector__label__btn'
                        onClick={(event) => {
                            event.stopPropagation();
                            this.handleClickSelectorButton();
                        }}>
                        {assignedTo}
                        <FontAwesomeIcon className='userSelector__label__btn__icon' icon={faCaretDown} />
                    </button>
                </div>
                <div className='drowpdown__wrapper' ref={this.wrapperRef}>
                    <Dropdown
                        textInputHint={textInputHint}
                        checkInput={checkInput}
                        userList = {userList}
                        searchList = {searchList}
                        loading={loading}
                        showDropdown={showDropdown}
                        user={user}
                        textInput={textInput}
                        enableCleanBtn={enableCleanBtn}
                        handleCleanInput={this.handleCleanInput}
                        handleInputChange={this.handleInputChange}
                        handleRemoveUser={this.handleRemoveUser}
                        handleAddUser={this.handleAddUser}
                       />
                </div>
            </div>
        )
    }
}

export default UserSelector;
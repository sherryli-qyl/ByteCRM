import React from 'react';
import Dropdown from '../components/Dropdown';
import DropDownDisplay from '../../DropDownDisplay';
import {GetCompanyByUserId} from '../../Api/Company';
import './CompanySelector.scss';



class CompanySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            checkInput: true,
            textInput: '',
            textInputHint: '',
            enableCleanBtn: false,
            loading:false,
            searchList:[],
        }
        this.wrapperRef = React.createRef();
        this.btnRef = React.createRef();
        this.handleClickSelectorButton = this.handleClickSelectorButton.bind(this);
        this.handleCleanInput = this.handleCleanInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickSelectorButton() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown
        })
        );
        this.handleCleanInput();
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

    handleCleanInput() {
        this.setState({
            textInput: '',
        })
        this.handleFindContact("");
    }

    handleFindContact(text) {
        let newHint = '';
        if (text.length === 0) {
            this.setState({
                searchList: [],
                checkInput: false,
            })
        }

        if (text.length >= 3) {
            newHint = 'searching';
            const response = GetCompanyByUserId(sessionStorage.getItem('userId'), text.toUpperCase())
            this.setState(prevState => ({
                ...prevState,
                loading: true
            }))
            response.then(findCompanies => {
                if (findCompanies) {
                    const newSearchList = findCompanies;
                    let foundNewCompany = false;
                    if (newSearchList.length >= 1) {
                        foundNewCompany = true;
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                checkInput: !foundNewCompany,
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
        const { showDropdown, checkInput,textInput,textInputHint,enableCleanBtn,loading} = this.state;
        return (
            <div className='companySelector'>
                <div className='companySelector__displayBar' ref={this.btnRef}>
                    <DropDownDisplay onClick={this.handleClickSelectorButton}>
                        Search Companies
                   </DropDownDisplay>
                </div>
                <div className='companySelector__dropDown' ref={this.wrapperRef}>
                        {showDropdown ?
                            <Dropdown checkInput={checkInput}
                                      corner={'disable'}
                                      placeholder = {'Search'}
                                      textInput = {textInput}
                                      loading = {loading}
                                      textInputHint={textInputHint}
                                      enableCleanBtn = {enableCleanBtn}
                                      showDropdown={showDropdown}
                                      handleCleanInput={this.handleCleanInput}
                                      handleInputChange={this.handleInputChange}
                                       />
                            :
                            ""
                        }
                    </div>
            </div>
        )
    }
}
export default CompanySelector;
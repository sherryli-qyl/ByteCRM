import React from 'react';
import Dropdown from '../components/Dropdown';
import DropDownDisplay from '../../DropDownDisplay';
import Select from './Select';
import {GetCompanyByUserId} from '../../Api/Company';
import NameTag from '../../NameTag';
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
            company:"",
            selectIndex: 0, 
            searchList:[],
            dropDownDisable:false,
        }
        this.wrapperRef = React.createRef();
        this.btnRef = React.createRef();
        this.handleClickSelectorButton = this.handleClickSelectorButton.bind(this);
        this.handleAddCompany = this.handleAddCompany.bind(this);
        this.handleRemoveCompany = this.handleRemoveCompany.bind(this);
        this.handleCleanInput = this.handleCleanInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.onChangeSelectItem = this.onChangeSelectItem.bind(this);
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

    handleRemoveCompany(selectedCompany) {
       this.setState({
           company: selectedCompany
       })
    }

    handleAddCompany(selectedCompany) {
        this.setState({
            company: selectedCompany
        })
        this.props.handleSelectedCompany(selectedCompany);
        this.handleClickSelectorButton();
    }

    handleFindContact(text) {
        let newHint = '';
        if (text.length === 0) {
            this.setState({
                searchList: [],
                checkInput: false,
            })
        }

        else if (text.length > 0 && text.length < 3) {
            newHint = `type ${3 - text.length} more character`;
            this.setState(prevState => {
                return {
                    ...prevState,
                    textInputHint: newHint,
                    checkInput: true,
                }
            })
        }

        if (text.length >= 3) {
            newHint = 'searching';
            
            const response = GetCompanyByUserId(JSON.parse(localStorage.getItem('user')).id, text.toUpperCase())
            this.setState(prevState => ({
                ...prevState,
                loading: true
            }))
            response.then(findCompanies => {
                console.table(findCompanies);
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

    onChangeSelectItem(index){
        this.setState({
            selectIndex:index
        })
        console.log(index);
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
        const { showDropdown,checkInput,textInput,textInputHint,
                enableCleanBtn,loading,searchList,selectIndex,
                company, dropDownDisable} = this.state;

        const select = <Select label={'Company'}
                               searchList = {searchList}
                               selectIndex = {selectIndex}
                               handleAddCompany={this.handleAddCompany}
                               onChangeSelectItem = {this.onChangeSelectItem}/>;
        return (
            <div className='companySelector'>
                <div className='companySelector__displayBar' ref={this.btnRef}>
                    <DropDownDisplay dropDownDisable = {dropDownDisable} 
                                     onClick={this.handleClickSelectorButton}>
                        {company?
                         <NameTag disable={true} >
                              {company.name}
                         </NameTag>
                        :
                       " Search Companies"
                        }
                   </DropDownDisplay>
                </div>
                <div className='companySelector__dropDown' ref={this.wrapperRef}>
                        {showDropdown ?
                            <Dropdown checkInput={checkInput}
                                      corner={'disable'}
                                      placeholder = {'Search'}
                                      textInput = {textInput}
                                      loading = {loading}
                                      select = {select}
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
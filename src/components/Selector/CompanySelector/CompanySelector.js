import React from 'react';
import Dropdown from '../components/Dropdown';
import DropDownDisplay from '../../DropDownDisplay';
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
        // this.handleFindContact(inputText);
    }

    handleCleanInput() {
        this.setState({
            textInput: '',
        })
        // this.handleFindContact("");
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
        const { showDropdown, checkInput,textInput,textInputHint,enableCleanBtn} = this.state;
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
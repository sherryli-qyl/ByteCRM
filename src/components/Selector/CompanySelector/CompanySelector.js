import React from 'react';
import Dropdown from '../components/Dropdown';
import DropDownDisplay from '../../DropDownDisplay';
import './CompanySelector.scss';



class CompanySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            checkInput: false,
        }
        this.onClickDropDown = this.onClickDropDown.bind(this);
    }

    onClickDropDown() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown
        })
        )
        console.log(this.state.showDropdown);
    }


    render() {
        const { showDropdown, checkInput } = this.state;
        return (
            <div className='companySelector'>
                <div className='companySelector__displayBar'>
                    <DropDownDisplay onClick={this.onClickDropDown}>
                        Search Companies
                   </DropDownDisplay>
                </div>
                <div className='companySelector__dropDown'>
                        {showDropdown ?
                            <Dropdown checkInput={checkInput}
                                      corner={'disable'}
                                      placeholder = {'Search'}
                                      showDropdown={showDropdown} />
                            :
                            ""
                        }
                    </div>
            </div>
        )
    }
}


export default CompanySelector;
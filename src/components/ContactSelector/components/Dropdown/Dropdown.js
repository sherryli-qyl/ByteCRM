import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import HintBar from '../HintBar';
import Loading from '../../../Loading';
import './Dropdown.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        const { showDropdown, hintMessage, checkInput, currentList ,loading,oneContact } = this.props
        let className = "dropdown "
        if (showDropdown) {
            className += "dropdown__active"
        }
        return (
            <div className={className}>
                <div className='dropdown__corner' />
                <div className='dropdown__inner'>
                    <div className='dropdown__inner__wrapper'>
                        <SearchBar textInput={this.props.textInput}
                                   enableCleanBtn={this.props.enableCleanBtn}
                                   handleInputChange={this.props.handleInputChange}
                                   handleCleanInput={this.props.handleCleanInput} />
                    </div>
                    {!checkInput ?
                        <Select label={'Contacts'}
                                currentList={currentList}
                                handleRemoveContact={this.props.handleRemoveContact}
                                handleAddContact={this.props.handleAddContact}/>
                        :
                        loading ?
                            <Loading variant="bar" />
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
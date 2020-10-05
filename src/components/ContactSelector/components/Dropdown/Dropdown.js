import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import HintBar from '../HintBar';
import './Dropdown.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInput: false,
            hintMessage: '',

        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(text) {
        let newHint = '';
        if (text.length > 0 && text.length < 3) {
            newHint = `type ${3 - text.length} more character`;
            this.setState(prevState => {
                return {
                    ...prevState,
                    hintMessage: newHint,
                    checkInput: true,
                }
            })
        }
        else if (text.length >= 3) {
            newHint = 'searching';
            this.setState(prevState => {
                return {
                    ...prevState,
                    hintMessage: newHint,
                    checkInput: true,
                }
            })
        }
        else {
            this.setState({
                checkInput: false,
            })
        }
    }


    render() {
        const { showDropdown,contactList} = this.props;
        const { hintMessage, checkInput } = this.state;
        console.log(hintMessage);
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
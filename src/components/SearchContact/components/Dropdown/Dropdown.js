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
        console.log(text.length);
        if (text.length > 1 && text.length < 3) {
            newHint = `type ${3 - text.length} more character`;
            console.log(newHint);
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
        else{
            this.setState({
                checkInput:false,
            })
        }
    }


    render() {
        const { showDropdown } = this.props;
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
                            contactList={this.props.contactList} />
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
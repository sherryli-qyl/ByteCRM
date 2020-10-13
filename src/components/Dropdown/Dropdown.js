import React from 'react';
import Selects from './Selects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './Dropdown.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
        }
        this.onClickDropdown = this.onClickDropdown.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);

    }

    onClickDropdown() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown,
        })
        );
        console.log(this.state.showDropdown);
    }

    onChangeSelect(value){
        this.props.onChangeValue(value);
    }


    render() {
        const { value, selectItems } = this.props;
        const { showDropdown } = this.state;
        let currentValue = '';
        if (value) {
            currentValue = value;
        }
        else{
            currentValue = selectItems[0].value;
        }
       
        return (
            <div className='dropdown'>
                <div className="dropdown__above" onClick={this.onClickDropdown}>
                    <div className="dropdown__above__text">
                        {currentValue}
                    </div>
                    <div className="dropdown__above__icon">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <Selects selectItems={selectItems}
                         showDropdown={showDropdown} 
                         onChangeSelect = {this.onChangeSelect}/>
            </div>
        )
    }
}


export default Dropdown;
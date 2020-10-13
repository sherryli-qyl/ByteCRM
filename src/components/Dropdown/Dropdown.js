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
        this.onClickSelect = this.onClickSelect.bind(this);
    }

    onClickSelect() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown,
        })
        );
        console.log(this.state.showDropdown);
    }


    render() {
        const { value, selectItems } = this.props;
        const { showDropdown } = this.state;
        let currentValue = 0;
        if (value) {
            currentValue = value;
        }
        console.log(selectItems[currentValue].value);
        return (
            <div className='dropdown'>
                <div className="dropdown__above" onClick={this.onClickSelect}>
                    <div className="dropdown__above__text">
                        {selectItems[currentValue].value}
                    </div>
                    <div className="dropdown__above__icon">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <Selects selectItems={selectItems}
                    showDropdown={showDropdown} />
            </div>
        )
    }
}


export default Dropdown;
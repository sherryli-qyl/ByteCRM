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
        this.wrapperRef = React.createRef();
        this.btnRef = React.createRef();
        this.onClickDropdown = this.onClickDropdown.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    onClickDropdown() {
        this.setState(prevState => ({
            showDropdown: !prevState.showDropdown,
        })
        );
        console.log(this.state.showDropdown);
    }

    onChangeSelect(value) {
        this.props.onChangeValue(value);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && !this.btnRef.current.contains(event.target) && this.state.showDropdown) {
            this.onClickDropdown();
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    render() {
        const { value, selectItems } = this.props;
        const { showDropdown } = this.state;
        let currentValue = '';
        if (value) {
            currentValue = value;
        }
        else {
            currentValue = selectItems[0].value;
        }

        return (
            <div className='dropdown'>
                <div className="dropdown__above" ref={this.btnRef} onClick={this.onClickDropdown}>
                    <div className="dropdown__above__text">
                        {currentValue}
                    </div>
                    <div className="dropdown__above__icon">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <div ref={this.wrapperRef}>
                    <Selects selectItems={selectItems}
                             showDropdown={showDropdown}
                             onChangeSelect={this.onChangeSelect} />
                </div>
            </div>
        )
    }
}


export default Dropdown;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.scss';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            currentValue: '',
            enableCleanBtn: false,

        }
        this.onChange = this.onChange.bind(this);
        this.onCleanInput = this.onCleanInput.bind(this);
    }

    handleDisplay(inputText) {
        let activeBtn = false
        if (inputText.length > 0) {
            activeBtn = true;
        }
        this.setState(prevState => {
            return {
                ...prevState,
                currentValue: inputText,
                enableCleanBtn: activeBtn
            }
        })
    }

    onCleanInput() {
        this.setState(prevState => {
            return {
                ...prevState,
                currentValue: '',
                enableCleanBtn: false,

            }
        })
        this.props.onChange('');
    }

    onChange(event) {
        event.preventDefault();
        this.handleDisplay(event.target.value);
        this.props.onChange(event.target.value);
    }

    componentDidUpdate() {
        this.textInput.current.focus();
    }


    render() {
        const { currentValue, enableCleanBtn } = this.state;
        let icon = faSearch
        let btnClassName = 'searchBar__right__btn ';
        if(enableCleanBtn){
            icon = faTimes;
            btnClassName += "searchBar__right__btn__active";
        }
        return (
            <div className='searchBar'>
                <form className="searchBar__form"
                >
                    <input ref={this.textInput}
                        value={currentValue}
                        className="searchBar__input"
                        placeholder="Search all records"
                        onChange={this.onChange}
                    />
                </form>
                <div className="searchBar__right">
                    <button disabled = {!enableCleanBtn} className={btnClassName} onClick={this.onCleanInput}>
                        <FontAwesomeIcon className="searchBar__right__btn__icon" icon={icon} />
                    </button>
                </div>
            </div>
        )

    }
}


export default SearchBar;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.scss';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onClickCleanBtn = this.onClickCleanBtn.bind(this);
    }

    CleanInput(){
        this.props.handleCleanInput();
    }

    onChange(event) {
        event.preventDefault();
        this.props.handleInputChange(event.target.value);
    }

    onClickCleanBtn() {
        this.CleanInput();
    }

    componentDidUpdate() {
        this.textInput.current.focus();
    }

   

    render() {
        const { textInput, enableCleanBtn } = this.props;
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
                        value={textInput}
                        className="searchBar__input"
                        placeholder="Search all records"
                        onChange={this.onChange}
                    />
                </form>
                <div className="searchBar__right">
                    <button disabled = {!enableCleanBtn} className={btnClassName} onClick={this.onClickCleanBtn}>
                        <FontAwesomeIcon className="searchBar__right__btn__icon" icon={icon} />
                    </button>
                </div>
            </div>
        )

    }
}


export default SearchBar;
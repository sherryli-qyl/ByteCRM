import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import './SearchBar.scss';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            currentValue: this.props.textInput,
            enableCleanBtn: this.props.enableCleanBtn,
        }
        this.onChange = this.onChange.bind(this);
        this.CleanInput = this.CleanInput.bind(this);
        this.onClickCleanBtn = this.onClickCleanBtn.bind(this);
    }

    handleDisplay(inputText) {
        let activeBtn = false
        if (inputText.length > 0) {
            activeBtn = true;
        }
        this.setState({
            currentValue: inputText,
            enableCleanBtn: activeBtn
        })
    }

    CleanInput(){
        this.setState({
            currentValue: '',
            enableCleanBtn: false,
        })
    }

    onClickCleanBtn() {
        this.CleanInput();
    }

    onChange(event) {
        event.preventDefault();
        this.handleDisplay(event.target.value);
    }

    componentDidUpdate() {
        this.textInput.current.focus();
    }

    componentDidMount(){
        this.props.handleCleanInput(this.CleanInput);
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
                    <button disabled = {!enableCleanBtn} className={btnClassName} onClick={this.onClickCleanBtn}>
                        <FontAwesomeIcon className="searchBar__right__btn__icon" icon={icon} />
                    </button>
                </div>
            </div>
        )

    }
}


export default SearchBar;
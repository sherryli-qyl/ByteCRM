import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import HintBar from './components/HintBar';
import Loading from '../Loading';

import './SearchBar.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onClickCleanBtn = this.onClickCleanBtn.bind(this);
    }

    CleanInput() {
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
        const {
 textInput, enableCleanBtn, checkInput, textInputHint, loading, placeholder,
} = this.props;

        let showHint = false;
        if (checkInput) {
            showHint = checkInput;
        }

        let icon = faSearch;
        let btnClassName = 'searchBar__top__right__btn ';
        if (enableCleanBtn) {
            icon = faTimes;
            btnClassName += 'searchBar__right__btn__active';
        }
        return (
          <div className="searchBar">
            <div className="searchBar__top">
              <form className="searchBar__top__form">
                <input
                  ref={this.textInput}
                  value={textInput}
                  className="searchBar__top__form__input"
                  placeholder={placeholder}
                  onChange={this.onChange}
                />
              </form>
              <div className="searchBar__top__right">
                <button disabled={!enableCleanBtn} className={btnClassName} onClick={this.onClickCleanBtn}>
                  <FontAwesomeIcon className="searchBar__top__right__btn__icon" icon={icon} />
                </button>
              </div>
            </div>
            {showHint
                    ? (
                      <div className="searchBar__bottom">
                        {loading
                            ? <Loading variant="bar" />
                            : (
                              <HintBar>
                                {textInputHint}
                              </HintBar>
)}
                      </div>
)
                    : ''}
          </div>
        );
    }
}

export default SearchBar;

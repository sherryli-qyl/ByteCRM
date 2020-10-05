import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.scss';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state ={

        }
    }

    componentDidUpdate(){
        this.textInput.current.focus();
    }

    render(){
        return (
            <div className='searchBar'>
                <form className="searchBar__form"
                >
                    <input ref={this.textInput}
                           className="searchBar__input"
                           placeholder = "Search all records"
                    />
                </form>
                <div className="searchBar__right">
                    <button className="searchBar__right__btn">
                        <FontAwesomeIcon className="searchBar__right__btn__icon" icon={faSearch} />
                    </button>
                </div>
            </div>
        )

    }
}
    

export default SearchBar;
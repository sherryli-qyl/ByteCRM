import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './SearchBar.scss';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state ={
            currentValue:'',

        }
        this.onChange = this.onChange.bind(this);
    }

    handleDisplay(inputText){
        this.setState(prevState=>{
            return{
                ...prevState,
                currentValue:inputText,
            } 
        })
    }

    onCleanInput(){
        this.setState(prevState=>{
            return{
                ...prevState,
                currentValue:'',
            } 
        })
    }

    onChange(event){
        event.preventDefault();
        this.handleDisplay(event.target.value);
        this.props.onChange(event.target.value);
    }

    componentDidUpdate(){
        this.textInput.current.focus();
    }


    render(){
        const {currentValue} = this.state;
        return (
            <div className='searchBar'>
                <form className="searchBar__form"
                >
                    <input ref={this.textInput}
                           value = {currentValue}
                           className="searchBar__input"
                           placeholder = "Search all records"
                           onChange = {this.onChange}
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
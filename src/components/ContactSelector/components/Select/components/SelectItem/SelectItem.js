import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import './SelectItem.scss';



class SelectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        }
        this.onClickCheckbox = this.onClickCheckbox.bind(this);
    }

    onClickCheckbox() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }))
    }

    render() {
        const { checked } = this.state;
        const { contact,contactID,oneContact} = this.props;
        let btnClassName = "selectItem__left__checkbox__btn "

        if(oneContact){
            btnClassName += "selectItem__left__checkbox__btn__disabled"
        }
        return (
            <div className='selectItem'>
                <div className='selectItem__left'>
                    {checked ?
                        <div className='selectItem__left__checkbox' >
                            <button
                                className = {btnClassName}
                                disabled = {oneContact}
                                onClick = {event =>{
                                event.preventDefault();
                                this.props.handleRemoveContact(contactID);
                                this.onClickCheckbox()
                            }}>
                                <FontAwesomeIcon  icon={faCheckSquare} />
                            </button>
                          
                        </div>
                        :
                        <div className='selectItem__left__square' 
                             onClick = {event =>{
                                event.preventDefault();
                                this.props.handleAddContact(contact);
                                this.onClickCheckbox()
                        }} />
                    }
                </div>
                <div className='selectItem__right'>
                    {`${contact.firstName} ${contact.lastName} (${contact.email})`}
                </div>
            </div>
        )
    }
}


export default SelectItem;
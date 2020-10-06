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
        const { contact,contactID} = this.props;
        return (
            <div className='selectItem'>
                <div className='selectItem__left'>
                    {checked ?
                        <div className='selectItem__left__checkbox' 
                            onClick = {event =>{
                                event.preventDefault();
                                this.props.handleRemoveContact(contactID);
                                this.onClickCheckbox()
                            }}>
                            <FontAwesomeIcon  icon={faCheckSquare} />
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
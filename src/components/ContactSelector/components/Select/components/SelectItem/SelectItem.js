import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import HintBox from '../../.././../../HintBox';
import './SelectItem.scss';


class SelectItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showHint:false,
        };
        this.handleHintToggle = this.handleHintToggle.bind(this);
    }

    handleHintToggle(show){
        this.setState({
            showHint:show
        })
    }

    render(){
        const {
            contact,
            contactID,
            disabled,
            checked,
            handleRemoveContact,
            handleAddContact,
            contactSelectHint
        } = this.props;

        const {showHint} = this.state;

        let btnClassName = "contactSelectItem__left__checkbox__btn "

        if (disabled) {
            btnClassName += "contactSelectItem__left__checkbox__btn--disabled"
        }

        return(
            <div className='contactSelectItem'  onMouseEnter = {()=>this.handleHintToggle(true)}
                                                onMouseLeave={()=>this.handleHintToggle(false)}>
            <div className='contactSelectItem__left'>
                {checked ?
                    <div className='contactSelectItem__left__checkbox'>
                        <button
                            className={btnClassName}
                            disabled={disabled}
                            onClick={event => {
                                event.preventDefault();
                                handleRemoveContact(contactID);
                            }}>
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </button>
                    </div>
                    :
                    <div className='contactSelectItem__left__square'
                        onClick={event => {
                            event.preventDefault();
                            handleAddContact(contact);
                        }} />
                }
            </div>
            <div className='contactSelectItem__right'>
                {`${contact.fullName} (${contact.email})`}
            </div>
            {disabled && showHint ?
                <div className="contactSelectItem__hint">
                    <HintBox variant='topRight'>{contactSelectHint}</HintBox>
                </div>
                :
                ""
            }
        </div>
        )
    }
   
}

export default SelectItem;
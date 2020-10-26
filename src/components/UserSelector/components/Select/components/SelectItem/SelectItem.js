import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import HintBox from '../../../../../HintBox';
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
            user,
            userID,
            disabled,
            checked,
            handleRemoveUser,
            handleAddUser,
            userSelectHint
        } = this.props;

        const {showHint} = this.state;

        let btnClassName = "userSelectItem__left__checkbox__btn "

        if (disabled) {
            btnClassName += "userSelectItem__left__checkbox__btn--disabled"
        }

        return(
            <div className='userSelectItem'  onMouseEnter = {()=>this.handleHintToggle(true)}
                                                onMouseLeave={()=>this.handleHintToggle(false)}>
            <div className='userSelectItem__left'>
                {checked ?
                    <div className='userSelectItem__left__checkbox'>
                        <button
                            className={btnClassName}
                            disabled={disabled}
                            onClick={event => {
                                event.preventDefault();
                                handleRemoveUser(userID);
                            }}>
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </button>
                    </div>
                    :
                    <div className='userSelectItem__left__square'
                        onClick={event => {
                            event.preventDefault();
                            handleAddUser(user);
                        }} />
                }
            </div>
            <div className='userSelectItem__right'>
                {`${user.fullName} (${user.email})`}
            </div>
            {disabled && showHint ?
                <div className="userSelectItem__hint">
                    <HintBox variant='topRight'>{userSelectHint}</HintBox>
                </div>
                :
                ""
            }
        </div>
        )
    }
   
}

export default SelectItem;
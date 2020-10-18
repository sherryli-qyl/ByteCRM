import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import './DropDownDisplay.scss';



const DropDownDisplay = ({
    children,
    onClick,
}) => (
        <div className='dropDownDisplay' onClick= {(event)=>{
            event.preventDefault();
            onClick();
        }}>
            <div className='dropDownDisplay__text'>
                {children}
            </div>
            <div className='dropDownDisplay__icon'>
                <FontAwesomeIcon icon={faCaretDown}/>
            </div>
        </div>
    )

export default DropDownDisplay;
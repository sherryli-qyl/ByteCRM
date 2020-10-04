import React from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReceiverTag.scss'



const ReceiverTag = ({
    onClick,
    children
}) => (
    <div className="item-content receiverContainer">
        <div className="receiverContainer__left">
            <span className="receiverContainer__left__nameTag">{children}</span>
        </div>
        <div className="receiverContainer__right">
            <button className="receiverContainer__right__closeButton"
                onClick={(event) => {
                    event.preventDefault();
                    onClick();
                }}
            >
               <FontAwesomeIcon className = "closeIcon" icon = {faTimes}/>
            </button>
        </div>
    </div>
);


export default ReceiverTag;
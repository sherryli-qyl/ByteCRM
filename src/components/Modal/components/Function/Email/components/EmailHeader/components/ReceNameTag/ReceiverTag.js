import React from 'react';
import closeIcon from '../../../../../../../../../img/Modal/Email/closeIcon.png';
import './ReceiverTag.scss'



const ReceiverTag = ({
    children
}) => (
        <div className="item-content receiverContainer">
            <div className="receiverContainer__left">
                <span className="receiverContainer__left__nameTag">{children}</span>
            </div>
            <div className="receiverContainer__right">
                <button className="receiverContainer__right__closeButton">
                    <img className="receiverContainer__right__closeButton__img"
                        src={closeIcon} alt="close" />
                </button>
            </div>
        </div>
    );


export default ReceiverTag;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import './DetailInfoItem.scss';



const DetailInfoItem = (props) => (
    <div className="detailInfoItem">
        <div className="detailInfoItem__left">
            <div className="detailInfoItem__left__title"> {props.title} </div>
            <div className="detailInfoItem__left__value"> {props.value} </div>
        </div>
        <div className="detailInfoItem__right">
            <button className="detailInfoItem__right__btn nakedBtn">
                <FontAwesomeIcon className='detailInfoItem__right__btn__icon' icon={faPencilAlt} />
            </button>
        </div>
        <div className='borderBottom'/>
    </div>
);

export default DetailInfoItem;
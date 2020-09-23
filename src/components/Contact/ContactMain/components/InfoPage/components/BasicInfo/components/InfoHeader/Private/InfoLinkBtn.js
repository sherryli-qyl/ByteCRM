import React from 'react';
import { faAngleLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './InfoLinkBtn.scss';


const InfoLinkBtn = ({
    children
}) => (
        <NavLink className ='navLink' activeClassName="active" to="/contacts">
            <button className="infoLink">
                <FontAwesomeIcon className='infoLink__leftArrow' icon={faAngleLeft} />
                <a className="infoLink__text">{children}</a>
                <FontAwesomeIcon className='infoLink__icon' icon={faUser} />
            </button>
        </NavLink>
    )

export default InfoLinkBtn;
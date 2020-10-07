import React from 'react';
import { faAngleLeft, faUser, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './InfoLinkBtn.scss';


const InfoLinkBtn = ({
    children,
    type
}) => {
    let {icon,route,btnClassName} = ""
    
    if(type === 'contact'){
        icon = faUser;
        btnClassName = 'infoLink--contact';
        route = "/contacts";
    }
    else{
      icon = faBuilding;
      route = "/companies";
      btnClassName = 'infoLink--company';
      
    }
    return (
        <NavLink className='navLink' activeClassName="active" to={route}>
            <button className={btnClassName}>
                <FontAwesomeIcon className='infoLink__leftArrow' icon={faAngleLeft} />
                  <span className="infoLink__text">{children}</span>
                <FontAwesomeIcon className='infoLink__icon' icon={icon} />
            </button>
        </NavLink>
    )
}

export default InfoLinkBtn;
import React from 'react';
import { NavLink } from "react-router-dom";
import './HeaderNavLink.scss';



const HeaderNavLink = ({
    children,
    path,
}) => {
    return (
        <div className='headerNavLinkWrapper'>
            <a href={path} className="headerNavLinkWrapper__link">
            {children}  
            </a>
        </div>
    )
}

export default HeaderNavLink;
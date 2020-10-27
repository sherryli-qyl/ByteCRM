import React from 'react';
import { NavLink } from "react-router-dom";
import './HeaderNavLink.scss';



const HeaderNavLink = ({
    children,
    path,
}) => {
    return (
        <div className='headerNavLinkWrapper'>
                <NavLink   className = "headerNavLinkWrapper__link"
                           to={{
                            pathname: path,
                        }}>
                    {children}
                </NavLink>
        </div>
    )
}

export default HeaderNavLink;
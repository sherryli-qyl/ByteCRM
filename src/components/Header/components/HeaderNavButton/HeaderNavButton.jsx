import React from 'react';
import { NavLink } from "react-router-dom";
import './HeaderNavButton.scss';



const HeaderNavButton = ({
    children,
    path,
    indictable,
}) => {
    return (
        <div className='navigationHeaderButtonWrapper'>
            <button className="navigationHeaderButtonWrapper__btn"
                onClick={(event) => {
                    event.preventDefault();
                }}>
                <NavLink to={{
                        pathname: path,
                    }}>
                    {children}
                </NavLink>
            </button>
        </div>
    )
}

export default HeaderNavButton;
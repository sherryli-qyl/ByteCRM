import React from 'react';
import Profile from "../../../../../../../../img/Contact/profile.png";
import './Body.scss';




const Body = ({
    user
}) => (
        <div className="navBarDropdown__body">
            <div className="navBarDropdown__body__avatar">
                <img className="navBarDropdown__body__avatar__img" src={Profile} alt="profile" />
            </div>
            <div className="navBarDropdown__body__profile">
                <div className="navBarDropdown__body__profile__name">
                   {user.fullName}
                </div>
                <div className="navBarDropdown__body__profile__email">
                   {user.email}
                </div>
                <div className="navBarDropdown__body__profile__preference">
                    Profile & Preferences
                </div>
            </div>
        </div>
    )

export default Body;
import React from 'react';
import { LOGIN_URL } from "../../../../../../../Routes/URLMap";
import { removeToken, removeUser } from "../../../../../../../../utils/auth";
import './Footer.scss'

const Footer = (user)=>(
    <div className="navBarDropdown__footer">
    <button
      className="navBarDropdown__footer__navButton"
      onClick={(event) => {
        removeUser();
        removeToken();
      }}
    >
      <a href={LOGIN_URL}>Sign Out</a>
    </button>
  </div>
)

export default Footer;
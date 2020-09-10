import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import Logo from '../navbar/logo.png';
import { FiHome } from "react-icons/fi";


const NavBar = () => (
    <nav className = "navbar">
        <img className="logo" src={Logo} alt="Logo" />
        <ul className="navbar-buttons">
            <li className = "home-page"><NavLink activeClassName="active" to="/contacts"><FiHome /></NavLink></li>
            <li className = "navbar-contacts"><NavLink activeClassName="active" to="/contacts">Contacts</NavLink></li>
            <li className = "navbar-companies"><NavLink activeClassName="active" to="/companies">Companies</NavLink></li>
            <li className = "navbar-logout"><NavLink activeClassName="active" to="/logout">Logout</NavLink></li>
        </ul>
    </nav>
);

export default NavBar;
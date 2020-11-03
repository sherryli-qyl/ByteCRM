<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import './Private.scss';
import { withRouter } from 'react-router';
import Profile from '../../../../img/Contact/profile.png';
import { isLoggedIn, removeToken } from '../../../../utils/auth';
import {
  CONTACT_BASE_URL,
  LOGIN_URL,
} from '../../../Routes/URLMap';
import HeaderNavLink from '../HeaderNavLink';
=======
import React from "react";
=======
import React, { Component } from "react";
>>>>>>> navbar profile dropdown
import "./Private.scss";
import Profile from "../../../../img/Contact/profile.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
<<<<<<< HEAD
import { isLoggedIn, removeToken } from "../../../../utils/auth";
import { CONTACT_BASE_URL, LOGIN_URL } from "../../../Routes/URLMap";
import HeaderNavLink from "../HeaderNavLink";
>>>>>>> fix navbar style

const logout = (history) => {
  removeToken();
  history.push(LOGIN_URL);
};

const Private = ({ history }) => {
  if (!isLoggedIn()) return null;

  return (
    <div className="right_wrapper">
      <div className="sign_out_wrapper">
        <HeaderNavLink path={LOGIN_URL}>
          <button className="private-nav">
            <div className="private-text" onClick={() => logout(history)}>
              Sign Out
=======
import NavbarDropdown from "../NavbarDropdown";

// const logout = (history) => {
//   removeToken();
//   history.push(LOGIN_URL);
// };

// const Private = ({ history }) => {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const handleClick = () => {
//     setClick(!click);
//     setDropdown(false);
//   };

//   // const onMouseEnter = () => {
//   //   setDropdown(true);
//   // };

//   // const onMouseLeave = () => {
//   //   setDropdown(false);
//   // };

//   // if (!isLoggedIn()) return null;

//   return (
//     <div className="right_wrapper">
//       {/* <div className="sign_out_wrapper">
//         <HeaderNavLink path={LOGIN_URL}>
//           <button className="private-nav">
//             <div className="private-text" onClick={() => logout(history)}>
//               Sign Out
//             </div>
//           </button>
//         </HeaderNavLink>
//       </div> */}
//       <div className="profile_wrapper" onClick={handleClick}>
//         <div
//           className={click ? "profile_container active" : "profile_container"}
//           // onMouseEnter={onMouseEnter}
//           // onMouseLeave={onMouseLeave}
//         >
//           <div className="profile_nav">
//             <img src={Profile} alt="profile" />
//           </div>
//           <div className="down_icon_wrapper">
//             <FontAwesomeIcon icon={faChevronDown} />
//           </div>
//           {dropdown && <NavbarDropddown />}
//         </div>
//       </div>
//     </div>
//   );
// };

class Private extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="right_wrapper">
        <div className="profile_wrapper" onClick={this.handleClick}>
          <div className="profile_container">
            <div className="profile_nav">
              <img src={Profile} alt="profile" />
>>>>>>> navbar profile dropdown
            </div>
            <div className="down_icon_wrapper">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div
              className={this.state.clicked ? "nav_dropdown active" : "nav_dropdown"}
            >
              <NavbarDropdown />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Private);

// {
//   /* <HeaderNavLink path={CONTACT_BASE_URL}> */
// }
// {
//   /* </HeaderNavLink> */
// }

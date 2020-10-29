import React from 'react';
import './Public.scss';
import SmallLogo from '../../../../img/Logo/smalllogo.png';
import {
  CONTACT_BASE_URL,
  COMPANY_BASE_URL,
  ABOUTUS_BASE_URL,
  CONTACTUS_BASE_URL,
} from '../../../Routes/URLMap';
import HeaderNavLink from '../HeaderNavLink';

const Public = () => (
  <div className="Layout">
    <HeaderNavLink path={CONTACT_BASE_URL}>
      <img src={SmallLogo} alt="small logo" />
    </HeaderNavLink>
    <HeaderNavLink path={CONTACT_BASE_URL}>
      Contacts
    </HeaderNavLink>
    <HeaderNavLink path={COMPANY_BASE_URL}>
      Companies
    </HeaderNavLink>
    <HeaderNavLink path={ABOUTUS_BASE_URL}>
      About
    </HeaderNavLink>
    <HeaderNavLink path={CONTACTUS_BASE_URL}>
      Contact Us
    </HeaderNavLink>
  </div>
);

export default Public;

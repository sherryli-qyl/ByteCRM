import React from 'react';
import DropdownItems from './DropItems/DropdownItems';
import './NavbarDropdown.scss';

const NavbarDropdown = ({
  user
}) => (
  <DropdownItems user = {user} />
);
export default NavbarDropdown;

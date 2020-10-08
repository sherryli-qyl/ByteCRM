import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import NavigationItem from '../NavigationItem';

const StyledLink = styled.a`
  text-decoration: none;
`;

const Link = ({
  href,
  children,
  className,
  indictable,
}) => (
  <NavigationItem
    as={StyledLink}
    indictable={indictable}
    href={href}
    className={className}
  >
    {children}
  </NavigationItem>
);

Link.defaultProps = {
  className: '',
  indictable: false,
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  indictable: PropTypes.bool,
};

const NavigationLink = {};

NavigationLink.Naked = Link;

NavigationLink.Text = styled(Link)`
  color: #545a77;

  &:hover {
    color: #008fb4;
  }
`;

const StyledButton = styled(Button)`
  margin: 8px 16px;
`;

NavigationLink.Button = ({
  href,
  children,
  variant,
}) => (
  <StyledButton
    size="small"
    as={StyledLink}
    href={href}
    variant={variant}
  >
    {children}
  </StyledButton>
);

NavigationLink.Button.defaultProps = {
  variant: 'primary',
};

NavigationLink.Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default NavigationLink;

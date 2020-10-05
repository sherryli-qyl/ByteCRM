import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';
import NavigationItem from '../NavigationItem';
import NakedButton from '../../UI/NakedButton';
import Button from '../../UI/Button';

const NavigationButton = {};

NavigationButton.Text = ({
  indictable,
  onClick,
  children,
}) => (
  <NavigationItem indictable={indictable}>
    <NavigationLink.Text as={NakedButton} onClick={onClick}>
      {children}
    </NavigationLink.Text>
  </NavigationItem>
);

NavigationButton.Text.defaultProps = {
  indictable: false,
};

NavigationButton.Text.propTypes = {
  indictable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledButton = styled(Button)`
  margin: 8px 16px;
`;

NavigationButton.Button = ({
  onClick,
  children,
  variant,
}) => (
  <StyledButton
    size="small"
    variant={variant}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

NavigationButton.Button.defaultProps = {
  variant: 'primary',
};

NavigationButton.Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default NavigationButton;

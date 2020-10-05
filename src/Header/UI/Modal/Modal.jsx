import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NakedButton from '../NakedButton';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  width: 500px;
  background: white;
  position: relative;
`;

const Header = styled.div`
  padding: 16px 24px;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #dadada;
`;

const Close = styled(NakedButton)`
  padding: 16px 24px 0 0;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  padding: 16px 24px;
`;

const Footer = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #dadada;
`;

const Modal = ({
  onClose,
  children,
}) => (
  <Overlay onClick={onClose}>
    <StyledModal onClick={(event) => event.stopPropagation()}>
      {children}
      <Close onClick={onClose}>X</Close>
    </StyledModal>
  </Overlay>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

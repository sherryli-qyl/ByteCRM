import React from 'react';
import EmailModal from '../../../../../../../Activities/components/Email/components/Modal/CreateEmail';
import { ModalContext } from '../../../../../../../Modal/components/ModalContext';
import Modal from '../../../../../../../../js/Modal';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Detail.scss';


const Detail = (props) => {
  const createModal = new Modal('Email', 'Email', <EmailModal />);
  return (
    <ModalContext.Consumer>
      { openModal =>
        <div className="detailWrapper">
          <div className="name"> {props.name} </div>
          <div className="position"> {props.position} </div>
          <div className="email">
            <div className="emailIcon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <span className="email_address" onClick={() => openModal(createModal)}>{props.email}</span>
          </div>
        </div >
      }
    </ModalContext.Consumer>
  )
};

export default Detail;
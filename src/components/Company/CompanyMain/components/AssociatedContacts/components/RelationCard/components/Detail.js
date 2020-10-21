import React from 'react';
import EmailModal from '../../../../../../../Activities/components/Email/components/Modal/CreateEmail';
import { ModalContext } from '../../../../../../../Modal/components/ModalContext';
import Modal from '../../../../../../../../js/Modal';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../../../../../../../Avatar';
import './Detail.scss';


const Detail = ({
  contact,
  company,
}) => {

  let jobTitle = ""
  if (contact.jobTitle) {
    jobTitle = contact.jobTitle + " at"
  }

  const createModal = new Modal('Email', 'Email', <EmailModal />);
  return (
    <ModalContext.Consumer>
      { value =>
        <div className="detail">
          <div className="detailWrapper">
            <div className="detailWrapper__header">
              <div className="detailWrapper__header__avatar">
                <Avatar>
                  {`${contact.firstName[0]}${contact.lastName[0]}`}
                </Avatar>
              </div>
              <div className="detailWrapper__header__basicInfo">
                <div className="detailWrapper__header__basicInfo__name">
                  {contact.fullName}
                </div>
                <div className="detailWrapper__header__basicInfo__jobTitle">
                  {`${jobTitle} ${company.name}`}
                </div>
              </div>
            </div>
            <div className="detailWrapper__emailContainer">
              <div className="detailWrapper__emailContainer__icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span className="detailWrapper__emailContainer__email" onClick={() => value.open(createModal)}>{contact.email}</span>
            </div>
          </div>
        </div >
      }
    </ModalContext.Consumer>
  )
};

export default Detail;
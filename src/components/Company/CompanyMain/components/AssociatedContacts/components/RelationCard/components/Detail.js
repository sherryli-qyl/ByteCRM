import React from 'react';
import EmailModal from '../../../../../../../Activities/components/Email/components/Modal/CreateEmail';
import { ModalContext } from '../../../../../../../Modal/components/ModalContext';
import Modal from '../../../../../../../../js/Modal';
import { faEnvelope, faPhoneAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../../../../../../../Avatar';
import './Detail.scss';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemoveModal: false,
    }

  }

  render() {
    const { showRemoveModal } = this.state;
    const { contact, company } = this.props;
    let jobTitle = ""
    if (contact.jobTitle) {
      jobTitle = contact.jobTitle + " at"
    }

    const createModal = new Modal('Email', 'Email', <EmailModal />);

    return (
      <ModalContext.Consumer>
        { value =>
          <div className="relatedContacts">
            <div className="relatedContactsWrapper">
              <div className="relatedContactsWrapper__header">
                <div className="relatedContactsWrapper__header__avatar">
                  <Avatar>
                    {`${contact.firstName[0]}${contact.lastName[0]}`}
                  </Avatar>
                </div>
                <div className="relatedContactsWrapper__header__basicInfo">
                  <div className="relatedContactsWrapper__header__basicInfo__name">
                    {contact.fullName}
                  </div>
                  <div className="relatedContactsWrapper__header__basicInfo__jobTitle">
                    {`${jobTitle} ${company.name}`}
                  </div>
                </div>
              </div>
              <div className="relatedContactsWrapper__activityContainer">
                <div className="relatedContactsWrapper__activityContainer__icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span className="relatedContactsWrapper__activityContainer__activity" onClick={() => value.open(createModal)}>{contact.email}</span>
              </div>
              <div className="relatedContactsWrapper__activityContainer">
                <div className="relatedContactsWrapper__activityContainer__icon">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <span className="relatedContactsWrapper__activityContainer__activity">{contact.phoneNo}</span>
              </div>
            </div>
            {/* <div className='detail__btnContainer'>
              <RemoveButtom className='relatedCompany__btnContainer__remove' onClick={this.handleModalToggle}>
                <div className="relatedCompany__btnContainer__remove__hint">
                  <HintBox variant='bottomRight'>
                    Remove association
              </HintBox>
                </div>
                <FontAwesomeIcon icon={faTimes} />
              </RemoveButtom>
            </div>
            {showRemoveModal ?
              <RemoveRefModal contactName={contact.fullName}
                companyName={company.name}
                onClickConfirmBtn={this.onClickConfirmBtn}
                onClickCancelBtn={this.onClickCancelBtn} />
              :
              ""
            } */}
          </div>
        }
      </ModalContext.Consumer >
    )
  }
};

export default Detail;
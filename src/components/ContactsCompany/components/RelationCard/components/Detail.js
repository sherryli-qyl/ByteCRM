import React from 'react';
import { faPhoneAlt, faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RemoveButtom from '../../../../Style/Button/Activities/LogButton';
import RemoveRefModal from '../../RemoveCompanyRef';
import HintBox from '../../../../HintBox';
import './Detail.scss';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemoveModal: false
    }
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.onClickConfirm = this.onClickConfirm.bind(this);
    this.onClickCancelBtn = this.onClickCancelBtn.bind(this);
  }

  handleModalToggle() {
    this.setState(prevState => ({
      showRemoveModal: !prevState.showRemoveModal
    }))
  }

  onClickConfirm() {
    this.props.handleRemoveCompany();
  }

  onClickCancelBtn(){
    this.handleModalToggle();
  }

  render() {
    const { website, name, phoneNumber } = this.props;
    const { showRemoveModal } = this.state;
    const websiteURL = `https://${website}`;
    return (
      <div className="relatedCompany">
        <div className="relatedCompany__companyName"> {name} </div>
        <div className="relatedCompany__website">
          <a className="relatedCompany__website__link" href={websiteURL} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
          <div className="relatedCompany__website__linkIcon">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </div>
        </div>
        <div className="relatedCompany__phone">
          <div className="relatedCompany__phone__icon">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          {phoneNumber}
        </div>
        <div className='relatedCompany__btnContainer'>
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
          <RemoveRefModal contactName={name}
                          companyName={name}
                          onClickCancelBtn = {this.onClickCancelBtn}/>
          :
          ""
        }
      </div >
    )
  };
}

export default Detail;

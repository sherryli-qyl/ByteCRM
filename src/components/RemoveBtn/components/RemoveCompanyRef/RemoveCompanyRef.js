import React from 'react';
import Overlay from '../../../Overlay';
import Button from '../../../Button';

import './RemoveCompanyRef.scss';

const RemoveCompanyRef = ({
  contactName,
  companyName,
  onClickConfirmBtn,
  onClickCancelBtn,
}) => (
  <Overlay>
    <div className="removeCompanyRef">
      <div className="removeCompanyRef__text">
        {`Remove the association between ${contactName} and ${companyName}?`}
      </div>
      <div className="removeCompanyRef__btnWrapper">
        <Button variant="contained" size="large" onClick={() => (onClickConfirmBtn())}>
          Remove
        </Button>
        <Button variant="outlined" size="large" onClick={() => (onClickCancelBtn())}>
          Cancel
        </Button>
      </div>
    </div>
  </Overlay>
);
export default RemoveCompanyRef;

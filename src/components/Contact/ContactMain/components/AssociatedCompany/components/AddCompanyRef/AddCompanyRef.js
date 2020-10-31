import React from 'react';
import AddExistCompany from './components/AddExistCompany';
import SwitchButtonBar from '../../../../../../SwitchButtonBar';

import './AddCompabyRef.scss';

const AddCompanyRef = ({
  handleSelectedCompany,
}) => {
  const components = [{
    key: 0,
    label: 'Add existing company',
    component: <AddExistCompany handleSelectedCompany={handleSelectedCompany} />,
  },
  { key: 1, label: 'Create a new company', component: '' }];

  return (
    <div className="addRef">
      <div className="addRef__description">
        Keep track of which companies are related to this contact.
      </div>
      <SwitchButtonBar components={components} />
    </div>
  );
};

export default AddCompanyRef;

import React from 'react';
import AddNewDeals from './components/AddNewDeals';
import SwitchButtonBar from '../../../SwitchButtonBar';

import './AddDeals.scss';

const AddDeals = ({
    onChangeValue,
}) => {
    const components = [{
        key: 0,
        label: 'Create a new Deal',
        component: <AddNewDeals onChangeValue = {onChangeValue}/>,
    },
    { key: 1, label: 'Add existing deal', component: '' }];

    return (
        <div className="addDeals">
            <div className="addDeals__description">
                Track revenue opportunities for your contact by associating a deal.
      </div>
            <SwitchButtonBar components={components} />
        </div>
    );
};

export default AddDeals;
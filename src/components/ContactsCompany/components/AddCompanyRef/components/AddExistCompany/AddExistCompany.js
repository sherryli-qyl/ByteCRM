import React from 'react';
import CompanySelector from '../../../../../Selector/CompanySelector';

import './AddExistCompany.scss';

const AddExistCompany =({
    children
}) =>{

    return(
        <div>
            <CompanySelector/>
        </div>
    )
}

export default AddExistCompany;
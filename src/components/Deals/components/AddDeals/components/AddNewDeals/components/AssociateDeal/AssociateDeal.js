import React from 'react';
import CompanySelector from '../../../../../../../Selector/CompanySelector';
import ContactSelector from '../../../../../../../Selector/ContactSelector';

import './AssociateDeal.scss';



const AssociateDeal = ({
    deal,
    onChange,
}) => {
    return (
        <div className="associateDeal">
            <div className="associateDeal__wrapper">
                <span className="associateDeal__wrapper__title">
                    Associate deal with
                </span>
                <div className="associateDeal__wrapper__item">
                    <div className="associateDeal__wrapper__item__label">
                        Company
                    </div>
                    <CompanySelector  company = {deal.company}
                                      handleSelectedCompany={(company)=> onChange(company,'company')} />
                </div>
                <div className="associateDeal__wrapper__item">
                    <div className="associateDeal__wrapper__item__label">
                        Contact
                    </div>
                    <ContactSelector  contactList = {deal.contacts}
                                      handleSelectedContacts={(contact)=> onChange(contact,'contacts')} />
                </div>
            </div>

        </div>
    )
}

export default AssociateDeal;
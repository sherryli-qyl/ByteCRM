import React from 'react';
import Dropdown from '../components/Dropdown';

import './CompanySelector.scss';



class CompanySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrop: false,
        }
    }


    render() {
        return (
            <div className='CompanySelector'>
                <div classname='CompanySelector__display'>
                    Search Companies
                </div>
            </div>
        )
    }
}


export default CompanySelector;
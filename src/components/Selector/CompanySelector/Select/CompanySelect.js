import React from 'react';
import SelectItem from './components/SelectItem';
import './CompanySelect.scss';


const CompanySelect = (props) => {
    const { searchList, label, selectIndex } = props;
    let index = -1;
    return (
        <div className="searchResultSelect">
            <div className="searchResultSelect__title">
                <span className="searchResultSelect__title__text">
                    {label}
                </span>
            </div>
            {
                searchList.map(item => {
                    let selected = false
                    
                    index += 1
                    if (selectIndex === index){
                        selected = true
                    };

                    return (
                        <SelectItem
                            key={item._id}
                            companyID={item._id}
                            selected = {selected}
                            company={item}
                            index = {index}
                            handleAddCompany={props.handleAddCompany}
                            onChangeSelectItem= {props.onChangeSelectItem}>
                        </SelectItem>
                    )
                })
            }
        </div>
    )
}

export default CompanySelect;
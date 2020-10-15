import React from 'react';
import SelectItem from './components/SelectItem';
import './Selects.scss';




const Selects = ({
    selectItems,
    showDropdown,
    onChangeSelect,
}) => {
    let className = "select "
    if(showDropdown){
        className += "select__active"
    }
    return (
        <div className={className}>
            <div className='select__corner' />
            <div className='select__inner'>
                {selectItems.map((item) => {
                    return (
                        <SelectItem key={item.key}
                                    onClick={()=> onChangeSelect(item.value)}
                                    item = {item.value} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Selects;
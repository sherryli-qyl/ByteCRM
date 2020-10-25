import React from 'react';
import SelectItem from './components/SelectItem';
import './Selects.scss';




const Selects = ({
    selectItems,
    showDropdown,
    onChangeSelect,
}) => {
    let className = "select "
    if (showDropdown) {
        className += "select__active"
    }
    return (
        <div className={className}>
            <div className="select__wrapper">
                <div className='select__wrapper__corner' />
                <div className='select__wrapper__inner'>
                    {selectItems.map((item) => {
                       
                        return (
                            <SelectItem key={item.key}
                                onClick={() => onChangeSelect(item.value)}
                                item={ item.display? item.display: item.value} />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Selects;
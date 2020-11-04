import React from 'react';
import AddItem from '../../../../../../../AddItem';

import './Products.scss';


const Products = ({
    onChangeValue,
    onChangeProduct,
    deal,
}) => {
    let disabled = true;
        let quantityClassName = "quantityInput__quantity quantityInput__quantity--disabled";

        if (deal.products.name) {
            disabled = false;
            quantityClassName = "quantityInput__quantity"
        }

    return (
        <React.Fragment>
            <div className="addNewDeals__wrapper__products">
                <AddItem label={'Add product'}>
                    <input className="addItem__inputWrapper__input"
                        value={deal.products.name}
                        onChange={(event) => {
                            event.preventDefault();
                            onChangeProduct(event.target.value, 'name');
                        }} />
                </AddItem>
                <div className="quantityInput">
                    <div className="quantityInput__label">
                        Quantity
                            </div>
                    <input className={quantityClassName} value={deal.products.quantity}
                        onChange={(event) => {
                            event.preventDefault();
                            onChangeProduct(event.target.value, 'quantity');
                        }}
                        disabled={disabled} />
                </div>
            </div>
            <AddItem label={'Amount ($)'}>
                <input className="addItem__inputWrapper__input"
                    value={deal.amount}
                    onChange={(event) => {
                        event.preventDefault();
                        onChangeValue(event.target.value, 'amount');
                    }} />
            </AddItem>
            <div className = "blockline blockline--bottom"/>
        </React.Fragment>

    )
}

export default Products;


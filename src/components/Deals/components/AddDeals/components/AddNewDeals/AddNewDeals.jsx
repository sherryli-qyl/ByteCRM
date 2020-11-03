import React from 'react';
import Deal from './components/Deal';
import { transferDateInYearMonDay } from '../../../../../../lib/date';
import DatePicker from '../../../../../Style/Picker/DatePicker';
import StageDropdown from '../../../StageDropDown';
import AddItem from '../../../../../AddItem';
import UserSelector from '../../../../../Selector/UserSelector';
import './AddNewDeals.scss';



class AddNewDeals extends React.Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(localStorage.getItem('user'));
        const date = transferDateInYearMonDay(new Date());
        const deal = new Deal('', 'Appointment Scheduled', null, date, user, '', null, null, { name: '', quantity: '' });
        this.state = {
            deal,
            user
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeProduct = this.onChangeProduct.bind(this);
    }

    onChangeValue(value, key) {
        let newDeal = this.state.deal;
        newDeal[key] = value;
        this.setState({
            deal: newDeal
        });
    }

    onChangeProduct(value, key) {
        let newProducts = this.state.deal;
        newProducts.products[key] = value;
        this.setState({
            deal: newProducts
        });
    }

    componentDidMount() {
        const contact = JSON.parse(sessionStorage.getItem('contact'));
        const company = JSON.parse(sessionStorage.getItem('company'));
        let newDeal = this.state.deal;
        if (contact && contact.company) {
            newDeal.name = `${contact.company.name} - New Deal`;
            newDeal.contact = contact;
            newDeal.company = contact.company;
        }
        else if (contact) {
            newDeal.name = `${contact.fullName} - New Deal`;
            newDeal.contact = contact;
        }
        else {
            newDeal.name = `${company.name} - New Deal`;
            newDeal.company = company;
        }
        this.setState({
            deal: newDeal,
        })
    }

    render() {
        const { deal, user } = this.state;
        console.log(deal);
        let userList = [];
        userList.push(user);

        let disabled = true;
        let quantityClassName = "quantityInput__quantity quantityInput__quantity--disabled";
        if (deal.products.name){
            disabled = false;
            quantityClassName = "quantityInput__quantity"
        } 

        const addItems = [
            {
                key: 'name', label: 'Deal name *', component: <input value={deal.name} className="addItem__inputWrapper__input"
                    onChange={(event) => {
                        event.preventDefault();
                        this.onChangeValue(event.target.value, 'name');
                    }} />
            },
            {
                key: 'stage', label: 'Deal stage *', component:
                    <StageDropdown size={'large'}
                        currentValue={deal.value}
                        handleUpdate={(stage) => this.onChangeValue(stage, 'stage')} />
            },
            {
                key: 'dealOwner', label: 'Deal owner', component:
                    <UserSelector user={user}
                        userList={userList}
                        variant='SideBar'
                        handleAddUser={(user) => this.onChangeValue(user, 'dealOwner')} />
            },
            {
                key: 'closeDate', label: 'Close date', component:
                    <div className="addItem__inputWrapper__input">
                        <DatePicker onDateChange={(date) => this.onChangeValue(date, 'closeDate')} />
                    </div>
            },
        ]
        return (
            <div className="addNewDeals">
                <div className="addNewDeals__wrapper">
                    {addItems.map((item) => (
                        <AddItem key={item.key}
                            label={item.label}>
                            {item.component}
                        </AddItem>
                    ))}
                    <div className="addNewDeals__wrapper__products">
                        <AddItem label={'Add product'}>
                            <input className="addItem__inputWrapper__input"
                                   value={deal.products.name}
                                   onChange={(event) => {
                                        event.preventDefault();
                                        this.onChangeProduct(event.target.value, 'name');
                                }} />
                        </AddItem>
                        <div className = "quantityInput">
                            <div className = "quantityInput__label">
                                Quantity
                            </div>
                            <input className = {quantityClassName} value={deal.products.quantity} disabled = {disabled}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewDeals;
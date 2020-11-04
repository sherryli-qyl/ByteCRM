import React from 'react';
import Deal from './components/Deal';
import Products from './components/Products';
import AssociateDeal from './components/AssociateDeal';
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
        const deal = new Deal('', 'Appointment Scheduled', 0, date, user, '', null, null, { name: '', quantity: 0 });
        this.state = {
            deal,
            user,
            showAssociate: false,
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
        this.props.onChangeValue(this.state.deal);
    }

    onChangeProduct(value, key) {
        let newProducts = { ...this.state.deal };
        newProducts.products[key] = value;

        if (newProducts.products.name === '') {
            newProducts.products.quantity = 0;
        }

        if (isNaN(newProducts.products.quantity)) {
            newProducts.products.quantity = 0;
            this.setState({
                deal: newProducts,
                error: 'quantity must be a number'
            });
            return;
        }
        else if (newProducts.products.quantity) {
            newProducts.products.quantity = parseInt(newProducts.products.quantity);
        }
        this.setState({
            deal: newProducts
        });
        this.props.onChangeValue(this.state.deal);
    }

    componentDidMount() {
        const contact = JSON.parse(sessionStorage.getItem('contact'));
        const company = JSON.parse(sessionStorage.getItem('company'));
        let newDeal = this.state.deal;
        let contactList = [];
        if (contact && contact.company) {
            newDeal.name = `${contact.company.name} - New Deal`;
            contactList.push(contact);
            newDeal.contacts = contactList;
            newDeal.company = contact.company;
        }
        else if (contact) {
            newDeal.name = `${contact.fullName} - New Deal`;
            contactList.push(contact);
            newDeal.contacts = contact;
        }
        else {
            newDeal.name = `${company.name} - New Deal`;
            newDeal.company = company;
        }
        this.setState({
            deal: newDeal,
            showAssociate: true,
        })
    }

    render() {
        const { deal, user, error,showAssociate } = this.state;
        let userList = [];
        userList.push(user);

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
                    <Products deal={deal}
                         onChangeProduct={this.onChangeProduct}
                         onChangeValue = {this.onChangeValue} />
                    {showAssociate ?
                        <AssociateDeal deal={deal}
                            onChange={this.onChangeValue} />
                        :
                        ""
                    }
                </div>
            </div>
        )
    }
}

export default AddNewDeals;
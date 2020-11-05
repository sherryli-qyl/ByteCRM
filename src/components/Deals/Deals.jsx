import React from 'react';
import ExpandBar from '../ExpandBar';
import AddDeals from './components/AddDeals';
import DealsCards from './components/DealsCards';
import { AddDealFetch, GetDealsById, DeleteDealsById } from '../Api/Deals';


class Deals extends React.Component {
    constructor(props) {
        super(props);
        const { contact, company } = this.props;
        this.state = {
            disabled: false,
            loading:true,
            deals: [],
            newDeal: null,
            contact,
            company,
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onClickSaveBtn = this.onClickSaveBtn.bind(this);
        this.handleRemoveDeals = this.handleRemoveDeals.bind(this);
    }

    onChangeValue(newDeal) {
        this.setState({
            newDeal: newDeal,
        })
    }

    onClickSaveBtn() {
        const body = this.state.newDeal;
        let newDeals = this.state.deals;
        const data = AddDealFetch(body);
        data.then((response) => {
            if (response.statusText === 'OK') {
                newDeals.push(response.data);
                this.setState({
                    deals: newDeals,
                })
                console.log('Add Contacts success');
            } else {
                console.log('Add Contacts failed');
            }
        });
    }

    handleRemoveDeals(id){
        const data = DeleteDealsById(id);
        data.then((response) => {
            console.log(response)
          if (response.statusText === 'OK') {
            const newDeals = response.data;
            for (const i in newDeals) {
              if (newDeals[i].id === id) {
                newDeals.splice(i, 1);
                console.log(newDeals);
              }
            }
            this.setState({
              deals: newDeals,
            });
            console.log('Remove deal success');
          } else {
            console.log('Remove deal failed');
          }
        });
    }

    componentDidMount() {
        const {contact,company} = this.state;
        let id = '';
        company? id = company.id : id = contact.id
        const data = GetDealsById(id);
        data.then((response) => {
            if (response.statusText === 'OK') {
                this.setState({
                    deals: response.data,
                    loading: false,
                });
            }
        });
    }

    render() {
        const { disabled, deals } = this.state;

        let showDetail = true;

        const addModal = {
            title: 'Add Deals to this contact',
            content: <AddDeals onChangeValue={this.onChangeValue} />,
        };

        return (
            <div>
                <ExpandBar
                    label={`Deals (${deals.length})`}
                    content={
                        <DealsCards deals={deals} 
                                    handleRemoveDeals = {this.handleRemoveDeals}/>
                    }
                    addModal={addModal}
                    // hintMessage={hintMessage}
                    disabled={disabled}
                    showDetail={showDetail}
                    showAdd={true}
                    onClickSaveBtn={this.onClickSaveBtn}
                />
            </div>
        )
    }
}

export default Deals;
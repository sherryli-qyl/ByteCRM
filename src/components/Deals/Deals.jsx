import React from 'react';
import ExpandBar from '../ExpandBar';
import AddDeals from './components/AddDeals';
import DealsCards from './components/DealsCards';


class Deals extends React.Component {
    constructor(props) {
        super(props);
        const deals = [
            {id:0, name: 'yurun new deals', products: {name:'mask',quantity: 1, description:'medial mask'}, amount: 1000, stage:'Decision Maker Bought-In',
            discount: 1, closeDate:'2020-10-30', contact: null, company: null},
             {id:1, name: 'yurun new deals', products: {name:'mask',quantity: 2000, description:'medial mask'}, amount: 2000, stage:'Appointment Scheduled',
             discount: 1, closeDate:'2020-10-30', contact: null, company: null}
        ]
        this.state = {
            disabled: false,
            deals: deals,
            newDeal: null,
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onClickSaveBtn = this.onClickSaveBtn.bind(this);
    }

    onChangeValue(newDeal){
        this.setState({
            newDeal:newDeal,
        })
    }

    onClickSaveBtn() {
        const body = { newDeal: this.state.newDeal };
        let newDeals = this.state.deals;
        if (this.state.newDeal){
            newDeals.push(this.state.newDeal);
            this.setState({
                deals:newDeals,
            })
        }
       
        // const data = MultiRefChange(this.state.company.id, body);
        // data.then((response) => {
        //   if (response.statusText === 'OK') {
        //     this.setState({
        //         deals: response.data.deals,
        //     });
        //     console.log('Add Contacts success');
        //   } else {
        //     console.log('Add Contacts failed');
        //   }
        // });
      }

    


    render() {
        const {disabled,deals} = this.state;
        console.log(deals)

        let showDetail = true;

        const addModal = {
            title: 'Add Deals to this contact',
            content: <AddDeals onChangeValue = {this.onChangeValue}/>,
          };

        return (
            <div>
                <ExpandBar
                    label="Deals"
                    content = {
                        <DealsCards deals = {deals}/>
                    }
                    addModal={addModal}
                    // hintMessage={hintMessage}
                    disabled={disabled}
                    showDetail={showDetail}
                    showAdd = {true}
                    onClickSaveBtn={this.onClickSaveBtn}
                />
            </div>
        )
    }
}

export default Deals;
import React from 'react';
import ExpandBar from '../ExpandBar';
import AddDeals from './components/AddDeals';
import DealsCards from './components/DealsCards';


class Deals extends React.Component {
    constructor(props) {
        super(props);
        const deals = [
            {id:0, name: 'yurun new deals', product: {name:'mask',price: 1, description:'medial mask'}, amount: 1000, stage:'Decision Maker Bought-In',
            discount: 1, closeDate:'2020-10-30', contact: null, company: null},
             {id:1, name: 'yurun new deals', product: {name:'mask',price: 1, description:'medial mask'}, amount: 2000, stage:'Appointment Scheduled',
             discount: 1, closeDate:'2020-10-30', contact: null, company: null}
        ]
        this.state = {
            disabled: false,
            deals: deals,


        }
    }

    


    render() {
        const {disabled,deals} = this.state;

        let showDetail = true;

        const addModal = {
            title: 'Add Deals to this contact',
            content: <AddDeals/>,
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
                    // onClickSaveBtn={this.onClickSaveBtn}
                />
            </div>
        )
    }
}

export default Deals;
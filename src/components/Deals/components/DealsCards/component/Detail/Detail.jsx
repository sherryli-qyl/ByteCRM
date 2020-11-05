import React from 'react';
import { transferDateInMonDayYear } from '../../../../../../lib/date';
import StageDropDown from '../../../StageDropDown';
import StageBar from './component/StageBar';
import RemoveBtn from '../../../../../RemoveBtn';
import './Detail.scss';




class Detail extends React.Component {
    constructor(props) {
        super(props);
        const { card } = this.props;
        this.state = {
            card,
            showRemoveModal: false,
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleModalToggle = this.handleModalToggle.bind(this);
        this.onClickCancelBtn = this.onClickCancelBtn.bind(this);
        this.onClickConfirmBtn = this.onClickConfirmBtn.bind(this);
    }

    handleUpdate(value, key) {
        let newCard = this.state.card;
        newCard[key] = value;
        this.setState({
            card: newCard,
        })
    }

    handleModalToggle(){
        this.setState((prevState) => ({
            showRemoveModal: !prevState.showRemoveModal
        }));
    }

    onClickConfirmBtn(){
        this.props.handleRemoveDeals(this.state.card.id);
        this.handleModalToggle();
    }

    onClickCancelBtn(){
        this.setState({
            showRemoveModal: false,
        })
    }



    render() {
        const { card, showRemoveModal } = this.state;
        console.log(card)
        return (
            <div className="dealsDetail">
                <div className="dealsDetail__wrapper">
                    <div className="dealsCard__name">
                        {`$${card.amount} ${card.name}`}
                    </div>
                    <StageBar stage={card.stage} />
                    <div className="dealsCard__stage">
                        <span className="dealsCard__label">{"Stage:"}</span>
                        <StageDropDown currentValue={card.stage}
                            handleUpdate={(value) => this.handleUpdate(value, 'stage')} />
                    </div>
                    <div className="dealsCard__closeDate">
                        <span className="dealsCard__label">{"Close Date:"}</span>
                        {transferDateInMonDayYear(card.closeDate)}
                    </div>
                    <div className="dealsCard__removeBtn">
                        <RemoveBtn
                            showRemoveModal={showRemoveModal}
                            contactName={card.contacts[0].fullName}
                            companyName={card.name}
                            handleModalToggle={this.handleModalToggle}
                            onClickConfirmBtn={this.onClickConfirmBtn}
                            onClickCancelBtn={this.onClickCancelBtn}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;
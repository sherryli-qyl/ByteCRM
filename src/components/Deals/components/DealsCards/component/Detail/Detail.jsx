import React from 'react';
import { transferDateInMonDayYear } from '../../../../../../lib/date';
import StageDropDown from './component/StageDropDown';
import StageBar from './component/StageBar';
import './Detail.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    const { card } = this.props;
    this.state = {
      card,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(value, key) {
    let newCard = this.state.card;
    newCard[key] = value;
    this.setState({
      card: newCard,
    });
    console.log(newCard);
  }

  render() {
    const { card } = this.state;
    return (
      <div className="dealsDetail">
        <div className="dealsDetail__wrapper">
          <div className="dealsCard__name">
            {`$${card.total} ${card.name}`}
          </div>
          <StageBar stage={card.stage} />
          <div className="dealsCard__stage">
            <span className="dealsCard__label">Stage:</span>
            <StageDropDown
              currentValue={card.stage}
              handleUpdate={(value) => this.handleUpdate(value, 'stage')}
            />
          </div>
          <div className="dealsCard__closeDate">
            <span className="dealsCard__label">Close Date:</span>
            {transferDateInMonDayYear(card.closeDate)}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

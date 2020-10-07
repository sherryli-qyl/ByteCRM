import React from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RelationCards from './components/RelationCard';
import './Relationship.scss';


class Relationship extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRelationship: true,
      relationCards: this.props.relationCards,
    };
    this.handleShowRelationship = this.handleShowRelationship.bind(this);
  }

  handleShowRelationship() {
    this.setState(prevState => ({
      showRelationship: !prevState.showRelationship,
    }));
  }

  getNumOfRelation(count) {
    return `(${count})`;
  }

  render() {
    let angle = <FontAwesomeIcon icon={faChevronRight} />;
    let relationInfo;
    if (this.state.showRelationship) {
      angle = <FontAwesomeIcon icon={faChevronDown} />;
      relationInfo = <RelationCards />
    }

    return (
      <div className="expand_wrapper">
        <div className="container">
          <div className="label">
            <div
              onClick={this.handleShowRelationship}>
              <div>{angle} </div>
              <span>{this.props.label}</span>
            </div>
          </div>
          <div className="content">
            {relationInfo}
          </div>
        </div>
      </div >
    )
  }
}


export default Relationship;

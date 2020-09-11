import React, { Component } from 'react';
import Icon from '../../img/sortDownArrow.svg';
export default class Contacted extends Component {
  render() {
    return (
      <div>
        <button className="contactedName">
          John Doe&nbsp;
          <img src={Icon} alt="" />
        </button>
      </div>
    );
  }
}

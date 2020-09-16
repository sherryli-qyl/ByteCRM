import React from 'react';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CommentCard.scss';


class CommentCard extends React.Component {

  render () {
    return(
      <div className="comment-container">
        <div className="comment-container-header">
          <div className="comment-container-header__left">
            <FontAwesomeIcon icon={faUserCircle} />
            <p className="comment-detail"><b>{this.props.author}</b> left a comment</p>
          </div>
          <div className="note__header-right">
            {this.props.timestamp}
          </div>
        </div>
        <div className="comment-detail">
          <p> { this.props.content }</p>
        </div>
      </div>
    );
  }
}

export default CommentCard;

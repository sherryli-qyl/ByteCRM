import React from "react";
import './NoteCard.scss';
import NoteBody from "./components/NoteBody";
import NoteCardHeader from "./components/NoteCardHeader";
import CreatedBy from "./components/CreatedBy";
import CommentBox from "../CommentBox";

class NoteCard extends React.Component {

  render() {
    return (
      <div className="note-card-container">
        <NoteCardHeader 
          timestamp={this.props.timestamp}
        />
        <NoteBody 
          className="note-text-input"
          content={this.props.content}
        />
        <CreatedBy 
          author={this.props.author}
        />
        <CommentBox 
          comments={this.props.comments}
        />
    </div>
    );
  }
}

export default NoteCard;
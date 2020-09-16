import React from "react";
import './NoteCard.scss';
import RichTextInput from "./components/RichTextInput";
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
        <div className="note-text-input">
          <RichTextInput 
            content={this.props.content}
          />
        </div>
        <div>
          <CreatedBy 
            author={this.props.author}
          />
        </div>
        <CommentBox comments={this.props.comments}/>
        
    </div>
      
    );
  }
}

export default NoteCard;
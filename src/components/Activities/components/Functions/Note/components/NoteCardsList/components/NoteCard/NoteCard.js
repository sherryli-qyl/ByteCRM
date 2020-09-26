import React from 'react';
import CommentBox from './components/CommentBox';
import NoteBody from "./components/NoteBody";
import CreatedBy from "./components/CreatedBy";

class NoteCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NoteBody 
          content={this.props.card.content}
          />
        <CreatedBy 
          author={this.props.card.author}
        />  
        <CommentBox 
          comments={this.props.card.comments}
        />            
      </div>
    )
  }
}

export default NoteCard;
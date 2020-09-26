import React from 'react';
import CommentBox from './components/CommentBox';
import NoteBody from "./components/NoteBody";
import CreatedBy from "./components/CreatedBy";

class NoteCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {key,content,author,comments} = this.props.card;
    return (
      <div>
        <NoteBody 
          content={content}
          cardKey = {key}
          
          />
        <CreatedBy 
          author={author}
        />  
        <CommentBox 
          comments={comments}
        />            
      </div>
    )
  }
}

export default NoteCard;
import React from 'react';
// import CommentBox from './components/CommentBox';
import NoteBody from './components/NoteBody';
import CreatedBy from './components/CreatedBy';

class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    const { _id, content, comments } = this.props.card;
    this.state = {
      cardId: _id,
      card: this.props.card,
      content,
      comments,
    };
    this.onContentChange = this.onContentChange.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
  }

  onContentChange(content) {
    const newCard = this.state.card;
    newCard.content = content;
    this.setState({
      content,
      card: newCard,
    });
    this.props.onChangeNote(this.state.cardId, newCard);
  }

  onCommentChange(comments) {
    const newCard = this.state.card;
    newCard.comments = comments;
    this.setState({
      comments,
      card: newCard,
    });
    this.props.onChangeNote(this.state.cardId, newCard);
  }

  render() {
    const { cardId, content, comments } = this.props.card;

    return (
      <div>
        <NoteBody
          cardId={cardId}
          content={content}
          onContentChange={this.onContentChange}
        />
        <CreatedBy
          createdBy={this.props.card.createdBy.fullName}
        />
        {/* <CommentBox
          comments={comments}
          onCommentChange={this.onCommentChange}
        />             */}
      </div>
    );
  }
}

export default NoteCard;

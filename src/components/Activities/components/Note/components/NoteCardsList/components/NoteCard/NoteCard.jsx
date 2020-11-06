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
    const { card, cardId } = this.state;
    const { onChangeNote } = this.props;
    const newCard = card;
    newCard.content = content;
    this.setState({
      content,
      card: newCard,
    });
    onChangeNote(cardId, newCard);
  }

  onCommentChange(comments) {
    const { card, cardId } = this.state;
    const { onChangeNote } = this.props;
    const newCard = card;
    newCard.comments = comments;
    this.setState({
      comments,
      card: newCard,
    });
    onChangeNote(cardId, newCard);
  }

  render() {
    const {
      cardId, content, comments, createdBy,
    } = this.props.card;

    return (
      <div>
        <NoteBody
          cardId={cardId}
          content={content}
          onContentChange={this.onContentChange}
        />
        <CreatedBy
          createdBy={createdBy.fullName}
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

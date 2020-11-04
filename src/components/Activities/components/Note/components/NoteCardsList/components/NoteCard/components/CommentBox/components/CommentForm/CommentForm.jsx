import React from 'react';
import './CommentForm.scss';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const author = 'Joe Doe';
    const { content } = this;
    const { addComment } = this.props;
    const timestamp = new Date().toString().slice(0, 33);
    addComment(author, content.value, timestamp);
    content.value = '';
    this.setState({ content: '' });
  }

  render() {
    const { handleShowCommentForm } = this.props;
    return (
      <form className="comment-form-container" onSubmit={this.handleSubmit.bind(this)}>
        <textarea
          className="comment-form-input"
          placeholder="Start typing comment..."
          required
          ref={(textarea) => this.content = textarea}
        />
        <div className="comment-form-controls">
          <button type="submit" className="comment-form-controls__save">Save</button>
          <button
            type="cancel"
            className="comment-form-controls__cancel"
            onClick={handleShowCommentForm}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default CommentForm;

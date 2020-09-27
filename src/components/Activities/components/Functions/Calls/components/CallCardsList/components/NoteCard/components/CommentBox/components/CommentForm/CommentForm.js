import React from 'react';
import './CommentForm.scss';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault();
    let author = 'Joe Doe';
    let content = this.content;
    let timestamp = new Date().toString().slice(0, 33);
    this.props.addComment(author, content.value, timestamp);
    this.content.value = '';
    this.setState({ content: '' });
  }

  render() {
    return (
      <form
        className="comment-form-container"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <textarea
          className="comment-form-input"
          placeholder="Start typing comment..."
          required
          ref={(textarea) => (this.content = textarea)}
        ></textarea>

        <div className="comment-form-controls">
          <button type="submit" className="comment-form-controls__save">
            Save
          </button>
          <button
            type="cancel"
            className="comment-form-controls__cancel"
            onClick={this.props.handleShowCommentForm}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default CommentForm;

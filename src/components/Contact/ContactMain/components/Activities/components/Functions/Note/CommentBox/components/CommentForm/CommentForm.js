import React from 'react';
import "./CommentForm.scss";


class CommentForm extends React.Component {

  handleSubmit(event) { 
    event.preventDefault();   
    let author = "Joe Doe";
    //let author = this.author;
    let content = this.content;
    let timestamp = new Date().toString().slice(0,33);
    this.props.addComment(author, content.value, timestamp);
    this.content.value = '';
    this.setState({ content: '' });
  }


  render() { 
    return (
      <form className="comment-form-container" onSubmit={this.handleSubmit.bind(this)}>
        <textarea 
          className="comment-form-input" 
          placeholder="Start typing comment..." 
          required 
          //content={this.state.value}
          ref={(textarea) => this.content = textarea}
        >
        </textarea>
        
        <div className="comment-form-controls">
          <button type="submit">Save</button>
          <button type="cancel">Cancel</button>
        </div>
      </form>
    );
  }
} 



export default CommentForm;
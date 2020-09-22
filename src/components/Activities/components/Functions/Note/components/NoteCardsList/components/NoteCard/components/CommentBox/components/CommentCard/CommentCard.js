import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//import Editor from '../../../../../../../../../../../../Style/Editor';
import './CommentCard.scss';


class CommentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      showActionIcons: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleEdit() {
    this.setState({ editing: true })
  }

  handleDelete() {
    this.props.onDelete(this.props.index);
  }

  handleSave() {
    this.props.onUpdate(this.newContent.value, this.props.index);
    this.setState({ editing: false });
  }

  handleCancel() {
    this.setState({ editing: false })
    this.setState({ showActionIcons: false })
  }

  handleActionIconsToggle = () => this.setState({ showActionIcons: !this.state.showActionIcons });

  renderNormalMode () {
    return(
      <div 
        className="comment-container" 
        onMouseEnter={this.handleActionIconsToggle}
        onMouseLeave={this.handleActionIconsToggle}
      >
        <div className="comment-container-header">
          <div className="comment-container-header__left">
            <FontAwesomeIcon icon={faUserCircle} />
            <p className="comment-createdby"><b>{this.props.author}</b> left a comment</p>
          </div>
          <div className="comment-container-header__right">
            {this.props.timestamp}
          </div>
        </div>
        <div className="comment-content">
          {this.props.content}
        </div>
        {this.state.showActionIcons 
          && (<div className="comment-card-actions">
              <FontAwesomeIcon icon={faPen} onClick={this.handleEdit} className="comment-card-actions__button"/>
              <FontAwesomeIcon icon={faTrashAlt} onClick={this.handleDelete} className="comment-card-actions__button"/>
             </div>)}
      </div>
    );
  }

  renderEditingMode () {
    return(
      <div className="comment-container">
        <div className="comment-container-header__left--editing">
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
        
        <div className="comment-editor">
          <textarea 
            className="comment-content-edit"
            ref={ (textarea) => { this.newContent = textarea; } } 
            onChange={this.handleChange}        
            defaultValue={this.props.content}>
          </textarea>
          <div className="comment-editor-actions">
            <button onClick={this.handleSave} class="comment-card-content__save">Save</button>
            <button onClick={this.handleCancel} class="comment-card-content__cancel">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  render() { 
    if(this.state.editing){ 
      return this.renderEditingMode();
    } else {
    return this.renderNormalMode();
    }
 }
}

export default CommentCard;
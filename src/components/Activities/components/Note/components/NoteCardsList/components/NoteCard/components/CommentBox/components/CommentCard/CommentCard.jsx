import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './CommentCard.scss';

class CommentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      showActionIcons: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleActionIconsToggle = () => this.setState({ showActionIcons: !this.state.showActionIcons });

  handleCancel() {
    this.setState({ editing: false });
    this.setState({ showActionIcons: false });
  }

  handleSave() {
    const { onUpdate, index } = this.props;
    onUpdate(this.newContent.value, index);
    this.setState({ editing: false });
  }

  handleDelete() {
    const { onDelete, index } = this.props;
    onDelete(index);
  }

  handleEdit() {
    this.setState({ editing: true });
  }

  renderNormalMode() {
    const { author, timestamp, content } = this.props;
    const { showActionIcons } = this.state;
    return (
      <div
        className="comment-container"
        onMouseEnter={this.handleActionIconsToggle}
        onMouseLeave={this.handleActionIconsToggle}
      >
        <div className="comment-container-header">
          <div className="comment-container-header__left">
            <FontAwesomeIcon icon={faUserCircle} />
            <p className="comment-createdby">
              <b>{author}</b>
              {' '}
              left a comment
            </p>
          </div>
          <div className="comment-container-header__right">
            {timestamp}
          </div>
        </div>
        <div className="comment-content">
          {content}
        </div>
        {showActionIcons
          && (
          <div className="comment-card-actions">
            <FontAwesomeIcon icon={faPen} onClick={this.handleEdit} className="comment-card-actions__button" />
            <FontAwesomeIcon icon={faTrashAlt} onClick={this.handleDelete} className="comment-card-actions__button" />
          </div>
          )}
      </div>
    );
  }

  renderEditingMode() {
    const { content } = this.props;
    return (
      <div className="comment-container">
        <div className="comment-container-header__left--editing">
          <FontAwesomeIcon icon={faUserCircle} />
        </div>

        <div className="comment-editor">
          <textarea
            className="comment-content-edit"
            ref={(textarea) => { this.newContent = textarea; }}
            onChange={this.handleChange}
            defaultValue={content}
          />
          <div className="comment-editor-actions">
            <button onClick={this.handleSave} type="submit" className="comment-card-content__save">Save</button>
            <button onClick={this.handleCancel} type="button" className="comment-card-content__cancel">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { editing } = this.state;
    if (editing) {
      return this.renderEditingMode();
    }
    return this.renderNormalMode();
  }
}

export default CommentCard;

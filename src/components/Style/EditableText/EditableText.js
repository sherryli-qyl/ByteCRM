import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Editor from '../Editor';
import SaveButton from '../Button/Activities/CreateButton';
import CancelButton from '../Button/Activities/LogButton';
import './EditableText.scss';

// TODO: Display default content in Editor
// TODO: save changes in Editor
// TODO: collapse if more than 5 rows
// TODO: able to expand or collapse content

class EditableText extends React.Component {
  // static contextType = EditorContext;

  constructor(props) {
    super(props);
    const { content, cardKey, variant } = this.props;
    this.state = {
      isEditingMode: false,
      onHover: false,
      content,
      cardKey,
      variant,
      currentContent: content,
      onChangeNote: '',
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(newContent) {
    console.log(newContent);
    this.setState({
      currentContent: newContent,
    });
  }

  handleSave() {
    const newContent = this.state.currentContent;
    this.setState({
      isEditingMode: false,
      content: newContent,
    });
    this.props.onContentChange(newContent);
  }

  handleEdit() {
    this.setState({
      isEditingMode: true,
      onHover: false,
    });
  }

  handleCancel() {
    this.setState({
      isEditingMode: false,
      onHover: false,
    });
  }

  handleEditIconToggle = (onHover) => this.setState({ onHover });

  renderNormalMode() {
    const { variant, currentContent } = this.state;
    const { lineThrough } = this.props;

    return (
      <div
        className="editableText"
        onMouseEnter={() => this.handleEditIconToggle(true)}
        onMouseLeave={() => this.handleEditIconToggle(false)}
        onClick={this.handleEdit}
      >

        <div className="editableText__content">
          {variant === 'input'
            ? (
              <div className={lineThrough ? 'editableText__content--input editableText__content--input--lineThrough '
                                        : 'editableText__content--input'}
              >
                {currentContent}
              </div>
)
            : <div className="editableText__content--editor" dangerouslySetInnerHTML={{ __html: this.state.content }} />}

        </div>

        <div className="editableText__icon">
          <FontAwesomeIcon
            icon={faPen}
            onClick={this.handleEdit}
          />
        </div>
      </div>
    );
  }

  renderEditingMode() {
    const { content, variant, currentContent } = this.state;

    return (
      <div className="editingmode">
        {variant === 'input' ? (
          <div className="editingmode__inputWrapper">
            <input
              className="editingmode__inputWrapper__input"
              value={currentContent}
              onChange={(event) => this.handleEditorChange(event.target.value)}
            />
          </div>
        )
          : (
            <div className="editingmode__editor">
              <Editor
                content={content}
                handleEditorChange={this.handleEditorChange}
              />
            </div>
        )}
        <div className="editingmode__actions">
          <div className="editingmode__actions__save">
            <SaveButton
              className="createButton-small"
              onClick={this.handleSave}
            >
              Save
            </SaveButton>
          </div>
          <div className="editingmode__actions__cancel">
            <CancelButton className="logButton-small" onClick={this.handleCancel}>Cancel</CancelButton>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isEditingMode } = this.state;
    return (isEditingMode
      ? this.renderEditingMode()
      : this.renderNormalMode()
    );
  }
}

export default EditableText;

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Editor from '../Editor';
import CreateButton from '../Button/Activities/CreateButton';
import LogButton from '../Button/Activities/LogButton';
import { EditorContext } from './Context';

import './EditableText.scss';

// TODO: Display default content in Editor
// TODO: save changes in Editor
// TODO: collapse if more than 5 rows
// TODO: able to expand or collapse content

class EditableText extends React.Component {
  // static contextType = EditorContext;
  
  constructor(props) {
    super(props);
    const { content,cardKey } = this.props;
    this.state = {
      isEditingMode: false,
      onHover: false,
      content,
      cardKey,
      currentContent: "",
      onChangeNote: '',
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }


  handleEditorChange(newContent) {
    this.setState({
      currentContent: newContent,
    })
  }

  handleSave() {
    const newContent = this.state.currentContent;
    this.setState({ 
      isEditingMode: false,
      content:newContent, 
    });
  }

  handleEdit() {
    this.setState({ isEditingMode: true })
  }

  handleCancel() {
    this.setState({
      isEditingMode: false,
      onHover: false
    })
  }

  handleEditIconToggle = () => this.setState({ onHover: !this.state.onHover });

  renderNormalMode() {
    const onHover = this.state.onHover;

    return (
      <div
        className={onHover ? "editable-text-wrapper__hovered" : "editable-text-wrapper"}
        onMouseEnter={this.handleEditIconToggle}
        onMouseLeave={this.handleEditIconToggle}
        onClick={this.handleEdit}
      >
        <div className="editable-text-content" dangerouslySetInnerHTML={{ __html: this.state.content }}>


        </div>

        <div className={onHover ? "editable-text-edit-icon" : "editable-text-edit-icon__hidden"}>
          <FontAwesomeIcon
            icon={faPen}
            onClick={this.handleEdit}
          />
        </div>
      </div>
    )
  }



  renderEditingMode() {
    const { content, currentContent,cardKey} = this.state;
    return (
      <div>
        <div className="editingmode-editor">
          <Editor content={content}
            handleEditorChange={this.handleEditorChange}
          />
        </div>
        <div className="editingmode-editor-actions">
          <EditorContext.Consumer>
            {onSave => (
              <div className="editingmode-editor-actions__save">
                <CreateButton className="createButton-small"
                              onClick={this.handleSave}
                              onSave={() => onSave(currentContent,cardKey)}>
                  Save
                </CreateButton>
              </div>
            )
            }
          </EditorContext.Consumer>
          <div className="editingmode-editor-actions__cancel">
            <LogButton className="logButton-small" onClick={this.handleCancel}>Cancel</LogButton>
          </div>
        </div>
      </div>
    );
  }



  render() {
    const isEditingMode = this.state.isEditingMode;
    return (isEditingMode
      ? this.renderEditingMode()
      : this.renderNormalMode()
    )
  }
}


export default EditableText;
import React, { Component } from 'react';
import './Editor.scss';


class Editor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { visible } = this.props;
    return visible && (
        <div className="editor-wrapper">
            <div className="editor">
                <div className="editor-title">这是editor标题</div>
                <div className="editor-content">这是editor内容</div>
                <div className="editor-operator">
                    <button className="editor-operator-close">取消</button>
                    <button className="editor-operator-confirm">确认</button>
                </div>
            </div>
            <div className="mask"></div>
        </div>
    );
  }
}
export default Editor;

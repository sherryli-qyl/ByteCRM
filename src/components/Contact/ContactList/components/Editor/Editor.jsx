import React, { Component } from 'react';
import './Editor.scss';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        visible: false
    };
  }

  // 首次渲染使用父组件的状态更新modal中的visible状态，只调用一次
  componentDidMount = () => {
    console.log(this.props.visible);
    this.setState({ visible: this.props.visible })
  }

  // 每次接收props就根据父组件的状态更新modal中的visible状态，首次渲染不会调用
  componentWillReceiveProps = () => {
    console.log(this.props.visible);
    this.setState({ visible: this.props.visible })
  }

   // 点击取消更新modal中的visible状态
  closeModal = () => {
    this.setState({ visible: false });
  }

  confirm = () => {
    this.setState({ visible: false });
  }

  maskClick = () => {
    this.setState({ visible: false});
  }


  render() {
    // 使用modal中维护的visible状态来控制显隐
    const { visible } = this.state;
    const { title } = this.props;
    return visible && (
        <div className="editor-wrapper">
            <div className="editor">
                <div className="editor-title">{title}</div>
                <div className="editor-content">这是editor内容</div>
                <div className="editor-operator">
                    <button 
                        className="editor-operator-close"
                        onClick={this.closeModal}>
                        取消
                    </button>
                    <button 
                        className="editor-operator-confirm"
                        onClick={this.confirm}>
                        确认
                    </button>
                </div>
            </div>
            <div className="mask" onClick={this.maskClick}></div>
        </div>
    );
  }
}
export default Editor;

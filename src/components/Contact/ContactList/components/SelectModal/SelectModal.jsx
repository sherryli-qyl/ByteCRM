import React, { Component } from 'react';
import './SelectModal.scss';


class SelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        visible: false
    };
  }

   // 点击取消更新modal中的visible状态
  closeModal = () => {
    this.props.changeVisible(false);
  }

  confirm = () => {
    this.props.changeVisible(false);
  }

  maskClick = () => {
    this.props.changeVisible(false);
  }


  render() {
    // 使用modal中维护的visible状态来控制显隐
    const { title } = this.props;
    return (
        <div className="editor-wrapper">
            <div className="editor">
                <div className="editor-title">{title}</div>
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
export default SelectModal;

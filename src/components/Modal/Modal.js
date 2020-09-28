import React, { Component } from 'react';
import './Modal.scss'
import Draggable from 'react-draggable';
import Header from './components/Header/';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScreen: false,
            defaultXaxis: 500,
            defaultYaxis: 100,
            hide: false,
        };

        this.showModal = this.showModal.bind(this);
        this.handleCloseButton = this.handleCloseButton.bind(this);
        this.handleHideButton = this.handleHideButton.bind(this);
    }


    handleCloseButton() {
        this.props.closeModal();
    }

    handleHideButton() {
        this.setState(preState=>({
            hide:!preState.hide,
        }))
    }

    showModal() {
        this.setState({
            visibleStatus: true,
            hide: false,
        })  
    }



    render() {
        const { hide} = this.state;
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const nodeRef = React.createRef();
        let modalClassName = "Modal";

        if (this.props.visible) {
            modalClassName += " Component--acitve";
        }

        return (
            <Draggable
                nodeRef={nodeRef}
                handle="strong" {...dragHandlers}
                defaultPosition={{ x: this.props.Xaxis, y: this.props.Yaxis }}
            >
                    <div ref={nodeRef} className={modalClassName}>
                        <strong className="cursor">
                            <div className="Header">
                                <Header
                                    name={this.props.currentModal.key}
                                    hide={this.state.hide}
                                    handleCloseButton={this.handleCloseButton}
                                    handleHideButton={this.handleHideButton}
                                />
                            </div>
                        </strong>
                        {hide ?
                            <div className="MainComponents" />
                            :
                            <div className="MainComponents Component--acitve">
                                {this.props.currentModal.modal}
                            </div>
                        }
                    </div>
            </Draggable>
        )
    }
}


export default Modal;
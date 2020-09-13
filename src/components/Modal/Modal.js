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

        this.modal = React.createRef();
        this.showModal = this.showModal.bind(this);
        this.handleCloseButton = this.handleCloseButton.bind(this);
        this.handleHideButton = this.handleHideButton.bind(this);
    }


    handleCloseButton() {
        this.props.closeModal();
    }

    handleHideButton() {
        const hideState = !this.state.hide;
        this.setState({
            hide: hideState,
        })
    }

    showModal() {
        this.setState({
            visibleStatus: true,
            hide: false,
        })
    }



    render() {
        const { hide, visibleStatus } = this.state;
        let className="MainComponents";
        if(!hide){
            className +=" Component--acitve";
        }

        return (
            <Draggable
                defaultPosition={{ x: this.props.Xaxis, y: this.props.Yaxis }}
            >
                {this.props.visible ?
                    <div ref={this.modal} className="Modal Component--acitve">
                        <div className="Header">
                            <Header
                                name={this.props.currentModal.key}
                                hide={this.state.hide}
                                handleCloseButton={this.handleCloseButton}
                                handleHideButton={this.handleHideButton}
                            />
                        </div>
                        {hide ?
                            <div className="MainComponents" />
                            :
                            <div className="MainComponents Component--acitve">
                                {this.props.currentModal.modal}
                            </div>
                        }
                    </div>
                    :
                    <div className ="Modal"/>
                }
            </Draggable>

        )
    }
}


export default Modal;